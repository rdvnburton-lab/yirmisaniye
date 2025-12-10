const express = require('express');
const router = express.Router();
const pool = require('../config/db').pool;
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/quiz/subjects
// @desc    Tüm dersleri listeler
// @access  Private
router.get('/subjects', authMiddleware, async (req, res) => {
    try {
        const [subjects] = await pool.query('SELECT subject_id, subject_name, icon FROM soru_subjects ORDER BY subject_name');
        res.json(subjects);
    } catch (error) {
        console.error('Dersler getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/quiz/topics
// @desc    Belirli bir derse ait konuları listeler
// @access  Private
router.get('/topics', authMiddleware, async (req, res) => {
    const { subjectId } = req.query;
    if (!subjectId) {
        return res.status(400).json({ message: 'Lütfen bir ders (subjectId) seçin.' });
    }
    try {
        const [topics] = await pool.query('SELECT topic_id, topic_name, icon FROM soru_topics WHERE subject_id = ? ORDER BY topic_name', [subjectId]);
        res.json(topics);
    } catch (error) {
        console.error('Konular getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});


// @route   GET api/quiz/questions
// @desc    Rastgele 10 soru ve seçeneklerini getirir
// @access  Private (Giriş yapmış kullanıcılar için)
router.get('/questions', authMiddleware, async (req, res) => {
    let connection; // Bağlantı değişkenini tanımla
    let quizId; // quizId'yi try bloğu dışında tanımla

    try {
        const userId = req.user.id;
        const { subjectId, topicIds, difficulty = 'medium', isTimed = 'false' } = req.query;

        if (!subjectId) {
            return res.status(400).json({ message: 'Lütfen bir ders (subjectId) seçin.' });
        }
        // Gelen topicIds string'ini kontrol et ve diziye çevir
        if (!topicIds || typeof topicIds !== 'string' || topicIds.trim() === '') {
            return res.status(400).json({ message: 'Lütfen en az bir konu (topicIds) seçin.' });
        }
        const topicIdsArray = topicIds.split(',').map(id => parseInt(id.trim(), 10));

        connection = await pool.getConnection(); // Bağlantıyı al

        // 1. Yeni bir quiz oturumu oluştur ve quizId'yi al
        const [quizResult] = await connection.query(
            'INSERT INTO soru_quizzes (user_id, difficulty, question_types, is_timed) VALUES (?, ?, ?, ?)',
            [userId, difficulty, JSON.stringify({ subjectId, topicIds: topicIdsArray }), isTimed === 'true']
        );
        quizId = quizResult.insertId;

        // 2. Belirtilen konulara (topicIds) ait rastgele 10 sorunun ID'lerini al.
        const [questionIds] = await connection.query(`
            SELECT q.question_id 
            FROM soru_questions q
            WHERE q.topic_id IN (?) AND q.difficulty = ?
            ORDER BY RAND() 
            LIMIT 10
        `, [topicIdsArray, difficulty]);

        if (questionIds.length === 0) {
            // Eğer soru bulunamazsa oluşturulan quiz oturumunu sil
            await connection.query('DELETE FROM soru_quizzes WHERE quiz_id = ?', [quizId]);
            return res.status(404).json({ message: 'Quiz için hiç soru bulunamadı.' });
        }

        const ids = questionIds.map(q => q.question_id);

        // 3. ID'leri alınan soruların tüm verilerini çek.
        const [questions] = await connection.query(
            `SELECT question_id, question_text, image_path, hint, options, correct_answer 
             FROM soru_questions 
             WHERE question_id IN (?)`,
            [ids]
        );

        // 4. Veritabanından gelen sonuçları, başlangıçtaki rastgele ID sırasına göre yeniden diz.
        // Bu, ORDER BY FIELD'ın yaptığı işi JavaScript'te yapmamızı sağlar.
        const questionsMap = new Map(questions.map(q => [q.question_id, q]));
        const orderedQuestions = ids.map(id => questionsMap.get(id));


        // Frontend'e göndermeden önce her sorunun seçeneklerini karıştır
        const formattedQuestions = orderedQuestions.map(q => ({
            id: q.question_id,
            question_text: q.question_text,
            image_path: q.image_path,
            hint: q.hint,
            // Seçenekleri işle ve doğru cevabın ID'sini bul (Düzeltildi)
            ...(() => {
                const optionsArray = (q.options ? JSON.parse(q.options) : []);
                let correctOptionId = -1;
                
                // Seçenekleri karıştırmak yerine onlara sabit ID'ler ata
                const optionsWithIds = optionsArray.map((optionText, index) => {
                    if (optionText === q.correct_answer) {
                        correctOptionId = index;
                    }
                    return { id: index, option_text: optionText };
                });
                
                return { options: optionsWithIds, correctOptionId };
            })()
        }));

        // Map'teki verileri bir diziye çevirerek quizId ile birlikte gönder.
        res.json({ quizId, questions: formattedQuestions });

    } catch (error) {
        console.error('Soruları getirirken hata:', error);
        // Hata oluşursa ve quizId oluşturulmuşsa temizle
        if (quizId && connection) {
            await connection.query('DELETE FROM soru_quizzes WHERE quiz_id = ?', [quizId]);
        }
        res.status(500).send('Sunucu hatası');
    } finally {
        if (connection) connection.release(); // Bağlantıyı havuza geri bırak
    }
});


// @route   POST api/quiz/submit
// @desc    Kullanıcının cevaplarını alır ve skoru hesaplar
// @access  Private
router.post('/submit', authMiddleware, async (req, res) => { // answers: [{ questionId: 1, optionId: 5, attempts: 1 }, ...]
    const { quizId, answers } = req.body; // answers: [{ questionId: 1, optionId: 5 }, ...]
    const userId = req.user.id;

    if (!quizId || !answers || !Array.isArray(answers)) {
        return res.status(400).json({ message: 'Geçersiz quiz ID veya cevap formatı.' });
    }

    let connection;
    try {
        connection = await pool.getConnection();
        await connection.beginTransaction(); // Birden fazla insert işlemi için transaction başlat

        let totalScore = 0;
        const totalQuestions = answers.length;
        let correctStreak = 0;
        const comboBonuses = []; // Animasyon için kombo kazanılan soru ID'lerini tutar
        const detailedResults = []; // Her sorunun sonucunu tutar

        // Quiz detaylarını (difficulty) soru_quizzes tablosundan al
        const [quizDetails] = await connection.query(
            'SELECT difficulty FROM soru_quizzes WHERE quiz_id = ? AND user_id = ?',
            [quizId, userId]
        );

        if (quizDetails.length === 0) {
            await connection.rollback();
            return res.status(404).json({ message: 'Quiz oturumu bulunamadı veya yetkisiz erişim.' });
        }
        const { difficulty } = quizDetails[0];

        for (const answer of answers) {
            const { questionId, optionId, attempts } = answer;
            
            // Soru metnini ve tüm seçenekleri çekerek doğru cevabı ve kullanıcının cevabını bul
            const [questionRows] = await connection.query(
                `SELECT question_text, options, correct_answer FROM soru_questions WHERE question_id = ?`,
                [questionId]
            );

            if (questionRows.length === 0) continue; // Soruyu atla

            const question = questionRows[0];
            const question_text = question.question_text;
            const correct_answer_text = question.correct_answer;
            
            const optionsArray = question.options ? JSON.parse(question.options) : [];
            // Artık karıştırmaya gerek yok, doğrudan ID ile erişebiliriz.
            const user_answer_text = optionsArray[optionId] || 'Cevap Verilmedi';
            const isCorrect = (user_answer_text === correct_answer_text);
            let questionScore = 0;

            if (isCorrect) {
                correctStreak++;
                if (attempts === 1) {
                    questionScore = 10; // İlk denemede doğru
                } else {
                    questionScore = 5; // İkinci denemede doğru
                }

                // Kombo kontrolü
                if (correctStreak > 0 && correctStreak % 3 === 0) {
                    questionScore += 5; // +5 bonus puan
                    comboBonuses.push(questionId); // Animasyon için bu soruyu işaretle
                }
            } else {
                correctStreak = 0; // Seri bozuldu
            }

            totalScore += questionScore;
            const is_correct_flag = isCorrect ? 1 : 0;

            detailedResults.push({ questionId, isCorrect, score: questionScore });

            // soru_answer_logs tablosuna kaydet
            await connection.query(
                `INSERT INTO soru_answer_logs
                 (user_id, quiz_id, question_id, question_text, correct_answer, user_answer, is_correct, points_earned, question_type, difficulty, time_taken, thinking_time)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [userId, quizId, questionId, question_text, correct_answer_text, user_answer_text, is_correct_flag, questionScore, 'general', difficulty, 0, 0]
            );
        }

        // Quiz tamamlandığında toplam skoru soru_quizzes tablosuna kaydet
        await connection.query(
            'UPDATE soru_quizzes SET total_score = ? WHERE quiz_id = ? AND user_id = ?',
            [totalScore, quizId, userId]
        );

        // Kullanıcının toplam puanını güncelle
        // Hem harcanabilir puanı (points) hem de toplam başarı puanını (total_score) artır
        await connection.query(
            'UPDATE users SET points = points + ?, total_score = total_score + ? WHERE id = ?',
            [totalScore, totalScore, userId]
        );

        // Puan kazanma işlemini logla
        await connection.query(
            'INSERT INTO user_point_transactions (user_id, transaction_type, amount, description, related_id) VALUES (?, ?, ?, ?, ?)',
            [userId, 'earn_quiz', totalScore, `Quiz #${quizId} tamamlandı.`, quizId]
        );

        // Kullanıcının güncel toplam puanını al
        const [user] = await connection.query('SELECT points FROM users WHERE id = ?', [userId]);

        await connection.commit(); // Transaction'ı onayla
        res.json({
            score: totalScore,
            total: totalQuestions,
            detailedResults,
            comboBonuses, // Frontend'in animasyon için kullanacağı bilgi
            new_total_points: user[0].points // Kullanıcının yeni toplam puanını döndür
        });

    } catch (error) {
        if (connection) await connection.rollback(); // Hata durumunda transaction'ı geri al
        console.error('Skor hesaplanırken veya cevaplar loglanırken hata:', error);
        res.status(500).send('Sunucu hatası');
    } finally {
        if (connection) connection.release(); // Bağlantıyı havuza geri bırak
    }
});

// @route   GET api/quiz/history
// @desc    Kullanıcının tamamladığı quiz'lerin listesini getirir
// @access  Private
router.get('/history', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    let connection;
    try {
        connection = await pool.getConnection();

        // 1. Gerekli tüm ders ve konu isimlerini tek seferde çekip haritala
        const [subjects] = await connection.query('SELECT subject_id, subject_name FROM soru_subjects');
        const subjectsMap = new Map(subjects.map(s => [s.subject_id, s.subject_name]));

        const [topics] = await connection.query('SELECT topic_id, topic_name FROM soru_topics');
        const topicsMap = new Map(topics.map(t => [t.topic_id, t.topic_name]));

        // 2. Kullanıcının quiz'lerini ve skorlarını tek bir sorgu ile al
        const [history] = await connection.query(`
            SELECT
                q.quiz_id,
                q.difficulty,
                q.question_types,
                q.created_at,
                SUM(al.is_correct) as score,
                COUNT(al.log_id) as total_questions
            FROM
                soru_quizzes q
            LEFT JOIN
                soru_answer_logs al ON q.quiz_id = al.quiz_id
            WHERE
                q.user_id = ?
            GROUP BY
                q.quiz_id
            ORDER BY
                q.created_at DESC;
        `, [userId]);

        // 3. Sonuçları zenginleştir
        const enrichedHistory = history.map(quiz => {
            const questionTypes = JSON.parse(quiz.question_types);
            return {
                ...quiz,
                subject_name: subjectsMap.get(parseInt(questionTypes.subjectId)) || 'Bilinmeyen Ders',
                // Birden fazla konu ID'sini al, isimlerini bul ve virgülle birleştir
                topic_name: questionTypes.topicIds.map(id => topicsMap.get(parseInt(id))).filter(Boolean).join(', ') || 'Bilinmeyen Konu',
                score: parseInt(quiz.score) || 0 // Eğer hiç doğru cevap yoksa SUM(is_correct) null dönebilir
            };
        });

        res.json(enrichedHistory);

    } catch (error) {
        console.error('Quiz geçmişi getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    } finally {
        if (connection) connection.release();
    }
});

// @route   GET api/quiz/history/:quizId
// @desc    Belirli bir quiz'in detaylı cevaplarını getirir
// @access  Private
router.get('/history/:quizId', authMiddleware, async (req, res) => {
    const { quizId } = req.params;
    const userId = req.user.id;
    try {
        const [details] = await pool.query('SELECT * FROM soru_answer_logs WHERE quiz_id = ? AND user_id = ?', [quizId, userId]);
        res.json(details);
    } catch (error) {
        console.error(`Quiz ${quizId} detayları getirilirken hata:`, error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/quiz/stats/wrong-topics
// @desc    Kullanıcının en çok yanlış yaptığı konuları listeler
// @access  Private
router.get('/stats/wrong-topics', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    try {
        const [stats] = await pool.query(`
            SELECT
                s.icon AS subject_icon,
                s.subject_name,
                t.topic_name,
                COUNT(al.log_id) AS wrong_count
            FROM
                soru_answer_logs al
            JOIN
                soru_questions q ON al.question_id = q.question_id
            JOIN
                soru_topics t ON q.topic_id = t.topic_id
            JOIN
                soru_subjects s ON t.subject_id = s.subject_id
            WHERE
                al.user_id = ? AND al.is_correct = 0
            GROUP BY
                s.subject_name, t.topic_id, t.topic_name
            ORDER BY
                s.subject_name, wrong_count DESC;
        `, [userId]);

        // Veriyi derslere göre grupla
        const groupedStats = stats.reduce((acc, current) => {
            const { subject_name, subject_icon, ...topicData } = current;
            if (!acc[subject_name]) {
                acc[subject_name] = { icon: subject_icon, topics: [] };
            }
            acc[subject_name].topics.push(topicData);
            return acc;
        }, {});

        res.json(groupedStats);
    } catch (error) {
        console.error('Yanlış konu istatistikleri getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/quiz/leaderboard
// @desc    En yüksek skorlu kullanıcıları listeler
// @access  Private
router.get('/leaderboard', authMiddleware, async (req, res) => {
    try {
        const [leaderboard] = await pool.query(`
            SELECT
                u.username,
                u.profile_picture,
                u.total_score AS total_score,
                COUNT(DISTINCT al.quiz_id) AS quizzes_completed
            FROM
                users u
            LEFT JOIN
                soru_answer_logs al ON u.id = al.user_id
            GROUP BY
                u.id, u.username, u.profile_picture
            ORDER BY
                total_score DESC
            LIMIT 20;
        `);
        res.json(leaderboard);
    } catch (error) {
        console.error('Liderlik tablosu getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/quiz/profile-stats
// @desc    Get detailed stats for the current user's profile
// @access  Private
router.get('/profile-stats', authMiddleware, async (req, res) => { // İlk profile-stats endpoint'i
    const userId = req.user.id;
    try {
        // 1. Get general stats (total score, total questions, quizzes completed)
        const [generalStats] = await pool.query(`
            SELECT
                (SELECT total_score FROM users WHERE id = ?) AS total_score,
                COUNT(DISTINCT quiz_id) AS quizzes_completed,
                COUNT(log_id) AS total_questions_answered,
                SUM(is_correct) AS total_correct_answers,
                SUM(CASE WHEN is_correct = 0 THEN 1 ELSE 0 END) AS total_wrong_answers
            FROM soru_answer_logs
            WHERE user_id = ?;
        `, [userId, userId]);

        // 2. Get performance over time (score per day for the last 30 days)
        const [performanceOverTime] = await pool.query(`
            SELECT
                DATE(logged_at) AS quiz_date,
                SUM(points_earned) AS daily_score
            FROM soru_answer_logs
            WHERE user_id = ? AND logged_at >= CURDATE() - INTERVAL 30 DAY
            GROUP BY quiz_date
            ORDER BY quiz_date ASC;
        `, [userId]);

        // 3. Get performance by difficulty
        const [performanceByDifficulty] = await pool.query(`
            SELECT
                difficulty,
                COUNT(log_id) AS total_answered,
                SUM(is_correct) AS correct_count,
                SUM(points_earned) AS total_points
            FROM soru_answer_logs
            WHERE user_id = ?
            GROUP BY difficulty
            ORDER BY FIELD(difficulty, 'easy', 'medium', 'hard');
        `, [userId]);

        // 4. Get top 3 best performing topics (by correct answer percentage)
        const [bestTopics] = await pool.query(`
            SELECT
                t.topic_name,
                s.subject_name,
                s.icon AS subject_icon,
                COUNT(al.log_id) AS total_answered,
                SUM(al.is_correct) AS correct_count,
                (SUM(al.is_correct) / COUNT(al.log_id)) * 100 AS success_rate
            FROM
                soru_answer_logs al
            JOIN
                soru_questions sq ON al.question_id = sq.question_id
            JOIN
                soru_topics t ON sq.topic_id = t.topic_id
            JOIN
                soru_subjects s ON t.subject_id = s.subject_id
            WHERE
                al.user_id = ?
            GROUP BY
                t.topic_id, t.topic_name, s.subject_name, s.icon
            HAVING
                COUNT(al.log_id) >= 5 -- En az 5 soru cevaplanmış konuları dikkate al
            ORDER BY
                success_rate DESC, total_answered DESC
            LIMIT 3;
        `, [userId]);

        const stats = {
            quizzes_completed: generalStats[0].quizzes_completed || 0,
            total_score: parseInt(generalStats[0].total_score) || 0,
            total_questions_answered: generalStats[0].total_questions_answered || 0,
            total_correct_answers: generalStats[0].total_correct_answers || 0,
            total_wrong_answers: generalStats[0].total_wrong_answers || 0,
            average_score_per_quiz: (generalStats[0].quizzes_completed > 0) ?
                                    (generalStats[0].total_score / generalStats[0].quizzes_completed).toFixed(2) : 0,
            overall_success_rate: (generalStats[0].total_questions_answered > 0) ?
                                  Math.round((generalStats[0].total_correct_answers / generalStats[0].total_questions_answered) * 100) : 0,
            performance_over_time: performanceOverTime,
            performance_by_difficulty: performanceByDifficulty,
            best_topics: bestTopics
        };

        res.json(stats);
    } catch (error) {
        console.error('Profil istatistikleri getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/quiz/daily-challenge
// @desc    Returns a random quiz suggestion for the day
// @access  Private
router.get('/daily-challenge', authMiddleware, async (req, res) => {
    try {
        // 1. Rastgele bir konu ve bağlı olduğu dersi getir.
        const [topics] = await pool.query(`
            SELECT t.topic_id, t.topic_name, s.subject_id, s.subject_name, s.icon
            FROM soru_topics t
            JOIN soru_subjects s ON t.subject_id = s.subject_id
            ORDER BY RAND()
            LIMIT 1;
        `);

        if (topics.length === 0) {
            return res.status(404).json({ message: 'Günün quizi için uygun konu bulunamadı.' });
        }

        res.json(topics[0]);
    } catch (error) {
        console.error('Günün quizi getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

module.exports = router;

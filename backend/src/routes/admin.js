const express = require('express');
const router = express.Router();
const { pool } = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Tüm admin rotaları için yetki kontrolü
router.use(authMiddleware, adminMiddleware);

// @route   GET api/admin/questions
// @desc    Tüm soruları listeler (Filtreleme eklenebilir)
router.get('/questions', async (req, res) => {
    try {
        const [questions] = await pool.query(`
            SELECT q.*, t.topic_name, s.subject_name 
            FROM soru_questions q
            JOIN soru_topics t ON q.topic_id = t.topic_id
            JOIN soru_subjects s ON t.subject_id = s.subject_id
            ORDER BY q.question_id DESC
            LIMIT 100
        `);
        res.json(questions);
    } catch (error) {
        console.error('Sorular listelenirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   POST api/admin/questions
// @desc    Yeni soru ekle
router.post('/questions', async (req, res) => {
    const { topic_id, difficulty, question_text, image_path, options, correct_answer, hint } = req.body;

    if (!topic_id || !difficulty || !question_text || !options || !correct_answer) {
        return res.status(400).json({ message: 'Lütfen zorunlu alanları doldurun.' });
    }

    try {
        const [result] = await pool.query(
            `INSERT INTO soru_questions (topic_id, difficulty, question_text, image_path, options, correct_answer, hint) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [topic_id, difficulty, question_text, image_path, JSON.stringify(options), correct_answer, hint]
        );
        res.status(201).json({ message: 'Soru başarıyla eklendi.', id: result.insertId });
    } catch (error) {
        console.error('Soru eklenirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   PUT api/admin/questions/:id
// @desc    Soruyu güncelle
router.put('/questions/:id', async (req, res) => {
    const { id } = req.params;
    const { topic_id, difficulty, question_text, image_path, options, correct_answer, hint } = req.body;

    try {
        await pool.query(
            `UPDATE soru_questions 
             SET topic_id = ?, difficulty = ?, question_text = ?, image_path = ?, options = ?, correct_answer = ?, hint = ?
             WHERE question_id = ?`,
            [topic_id, difficulty, question_text, image_path, JSON.stringify(options), correct_answer, hint, id]
        );
        res.json({ message: 'Soru başarıyla güncellendi.' });
    } catch (error) {
        console.error('Soru güncellenirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   DELETE api/admin/questions/:id
// @desc    Soruyu sil
router.delete('/questions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM soru_questions WHERE question_id = ?', [id]);
        res.json({ message: 'Soru başarıyla silindi.' });
    } catch (error) {
        console.error('Soru silinirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/admin/subjects
// @desc    Dersleri ve konuları hiyerarşik olarak getir (Dropdown için)
router.get('/subjects-topics', async (req, res) => {
    try {
        const [subjects] = await pool.query('SELECT * FROM soru_subjects');
        const [topics] = await pool.query('SELECT * FROM soru_topics');

        const data = subjects.map(subject => ({
            ...subject,
            topics: topics.filter(topic => topic.subject_id === subject.subject_id)
        }));

        res.json(data);
    } catch (error) {
        console.error('Ders/Konu verisi çekilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

module.exports = router;

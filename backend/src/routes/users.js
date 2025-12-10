const express = require('express');
const router = express.Router();
const pool = require('../config/db').pool;
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/users/profile/:username
// @desc    Bir kullanıcının genel profilini getirir
// @access  Private
router.get('/profile/:username', authMiddleware, async (req, res) => {
  const { username } = req.params;
  const requesterId = req.user.id;

  try {
    // 1. Kullanıcının temel bilgilerini al
    const [userResult] = await pool.query(
      'SELECT id, username, profile_picture, created_at, points, total_score FROM users WHERE username = ?',
      [username]
    );

    if (userResult.length === 0) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }

    const user = userResult[0];

    // 2. Kullanıcının istatistiklerini al
    const [statsResult] = await pool.query(`
        SELECT
            (SELECT total_score FROM users WHERE id = ?) AS total_score,
            COUNT(DISTINCT quiz_id) AS quizzes_completed
        FROM soru_answer_logs
        WHERE user_id = ?;
    `, [user.id, user.id]);

    const stats = {
      quizzes_completed: statsResult[0].quizzes_completed || 0,
      total_score: parseInt(statsResult[0].total_score) || 0,
    };

    // 3. Arkadaşlık durumunu kontrol et
    let friendshipStatus = 'none';
    if (requesterId !== user.id) {
      const [friendship] = await pool.query(
        `SELECT status FROM friendships 
         WHERE ((requester_id = ? AND addressee_id = ?) OR (requester_id = ? AND addressee_id = ?))`,
        [requesterId, user.id, user.id, requesterId]
      );
      if (friendship.length > 0) {
        friendshipStatus = friendship[0].status;
      }
    } else {
      friendshipStatus = 'self';
    }

    res.json({ user, stats, friendshipStatus });

  } catch (error) {
    console.error('Kullanıcı profili getirilirken hata:', error);
    res.status(500).send('Sunucu hatası');
  }
});

// @route   GET api/users/spent-points
// @desc    Kullanıcının harcadığı toplam puanı getirir
// @access  Private
router.get('/spent-points', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    try {
        const [result] = await pool.query(
            "SELECT SUM(amount) as total_spent FROM user_point_transactions WHERE user_id = ? AND transaction_type = 'spend_store'",
            [userId]
        );
        // Harcamalar negatif olduğu için sonucu pozitife çeviriyoruz.
        const totalSpent = Math.abs(result[0].total_spent) || 0;
        res.json({ total_spent: totalSpent });
    } catch (error) {
        console.error('Harcanan puan getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

module.exports = router;
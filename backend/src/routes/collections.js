const express = require('express');
const router = express.Router();
const pool = require('../config/db').pool;
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/collections/my-items
// @desc    Kullanıcının sahip olduğu avatarları ve rozetleri getirir
// @access  Private
router.get('/my-items', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    try {
        const [avatars] = await pool.query(`
            SELECT a.id, a.name, a.image_path
            FROM user_unlocked_items uui
            JOIN avatars a ON uui.item_id = a.id
            WHERE uui.user_id = ? AND uui.item_type = 'avatar'
        `, [userId]);

        const [badges] = await pool.query(`
            SELECT b.id, b.name, b.description, b.icon
            FROM user_unlocked_items uui
            JOIN badges b ON uui.item_id = b.id
            WHERE uui.user_id = ? AND uui.item_type = 'badge'
        `, [userId]);

        res.json({ avatars, badges });
    } catch (error) {
        console.error('Koleksiyon getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   PUT api/collections/select-avatar
// @desc    Kullanıcının profil resmini günceller
// @access  Private
router.put('/select-avatar', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    const { avatarId } = req.body;

    if (!avatarId) {
        return res.status(400).json({ message: 'Avatar ID gerekli.' });
    }

    try {
        // 1. Kullanıcının bu avatara sahip olup olmadığını kontrol et
        const [unlocked] = await pool.query('SELECT * FROM user_unlocked_items WHERE user_id = ? AND item_type = "avatar" AND item_id = ?', [userId, avatarId]);
        if (unlocked.length === 0) {
            return res.status(403).json({ message: 'Bu avatara sahip değilsiniz.' });
        }

        // 2. Avatarın yolunu al ve kullanıcının profilini güncelle
        const [avatars] = await pool.query('SELECT image_path FROM avatars WHERE id = ?', [avatarId]);
        await pool.query('UPDATE users SET profile_picture = ? WHERE id = ?', [avatars[0].image_path, userId]);

        res.json({ message: 'Profil resmi güncellendi.', image_path: avatars[0].image_path });
    } catch (error) {
        console.error('Avatar seçilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

module.exports = router;
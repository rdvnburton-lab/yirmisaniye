const express = require('express');
const router = express.Router();
const pool = require('../config/db').pool;
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/friends/request
// @desc    Kullanıcı adına göre arkadaşlık isteği gönder
// @access  Private
router.post('/request', authMiddleware, async (req, res) => {
    const { username } = req.body;
    const requesterId = req.user.id;

    if (!username) {
        return res.status(400).json({ message: 'Kullanıcı adı gerekli.' });
    }

    try {
        // İsteğin gönderileceği kullanıcıyı bul
        const [users] = await pool.query('SELECT id FROM users WHERE username = ?', [username]);
        if (users.length === 0) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }
        const addresseeId = users[0].id;

        // Kendine istek gönderemez
        if (requesterId === addresseeId) {
            return res.status(400).json({ message: 'Kendinize arkadaşlık isteği gönderemezsiniz.' });
        }

        // Mevcut bir arkadaşlık veya istek var mı diye kontrol et (her iki yönde de)
        const [existing] = await pool.query(
            'SELECT * FROM friendships WHERE (requester_id = ? AND addressee_id = ?) OR (requester_id = ? AND addressee_id = ?)',
            [requesterId, addresseeId, addresseeId, requesterId]
        );

        if (existing.length > 0) {
            if (existing[0].status === 'accepted') {
                return res.status(400).json({ message: 'Bu kullanıcı zaten arkadaşınız.' });
            }
            return res.status(400).json({ message: 'Bu kullanıcıya zaten bir istek gönderilmiş.' });
        }

        // Yeni istek oluştur
        await pool.query(
            'INSERT INTO friendships (requester_id, addressee_id, status) VALUES (?, ?, ?)',
            [requesterId, addresseeId, 'pending']
        );

        res.status(201).json({ message: 'Arkadaşlık isteği gönderildi.' });

    } catch (error) {
        console.error('Arkadaşlık isteği gönderme hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/friends/requests
// @desc    Gelen arkadaşlık isteklerini listele
// @access  Private
router.get('/requests', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    try {
        const [requests] = await pool.query(`
            SELECT f.id, u.username, u.profile_picture
            FROM friendships f
            JOIN users u ON f.requester_id = u.id
            WHERE f.addressee_id = ? AND f.status = 'pending'
        `, [userId]);
        res.json(requests);
    } catch (error) {
        console.error('İstekleri listeleme hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   PUT api/friends/request/:id
// @desc    Arkadaşlık isteğini kabul et veya reddet
// @access  Private
router.put('/request/:id', authMiddleware, async (req, res) => {
    const { action } = req.body; // 'accept' or 'reject'
    const requestId = req.params.id;
    const userId = req.user.id;

    if (!['accept', 'reject'].includes(action)) {
        return res.status(400).json({ message: 'Geçersiz eylem.' });
    }

    try {
        // İsteği ve isteği alanın doğru kullanıcı olup olmadığını kontrol et
        const [requests] = await pool.query('SELECT * FROM friendships WHERE id = ? AND addressee_id = ?', [requestId, userId]);
        if (requests.length === 0) {
            return res.status(404).json({ message: 'İstek bulunamadı veya yetkiniz yok.' });
        }

        const newStatus = action === 'accept' ? 'accepted' : 'rejected';
        await pool.query('UPDATE friendships SET status = ? WHERE id = ?', [newStatus, requestId]);

        res.json({ message: `İstek ${newStatus === 'accepted' ? 'kabul edildi' : 'reddedildi'}.` });

    } catch (error) {
        console.error('İstek yanıtlama hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/friends
// @desc    Kullanıcının arkadaşlarını listele
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    try {
        const [friends] = await pool.query(`
            SELECT 
                u.id, 
                u.username, 
                u.profile_picture
            FROM friendships f
            JOIN users u ON 
                (f.requester_id = u.id AND f.addressee_id = ?) OR 
                (f.addressee_id = u.id AND f.requester_id = ?)
            WHERE f.status = 'accepted' AND u.id != ?
        `, [userId, userId, userId]);
        res.json(friends);
    } catch (error) {
        console.error('Arkadaşları listeleme hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/friends/notifications
// @desc    Beklemedeki arkadaşlık isteği sayısını getirir
// @access  Private
router.get('/notifications', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    try {
        const [result] = await pool.query(
            'SELECT COUNT(*) as count FROM friendships WHERE addressee_id = ? AND status = \'pending\'',
            [userId]
        );
        res.json({ count: result[0].count || 0 });
    } catch (error) {
        console.error('Bildirim sayısı getirilirken hata:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   DELETE api/friends/:friendId
// @desc    Bir arkadaşı sil
// @access  Private
router.delete('/:friendId', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    const friendId = parseInt(req.params.friendId, 10);

    try {
        // Arkadaşlık ilişkisini bul ve sil. Her iki yönde de kontrol et.
        const [result] = await pool.query(
            'DELETE FROM friendships WHERE (requester_id = ? AND addressee_id = ? AND status = "accepted") OR (requester_id = ? AND addressee_id = ? AND status = "accepted")',
            [userId, friendId, friendId, userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Arkadaşlık bulunamadı.' });
        }

        res.json({ message: 'Arkadaş başarıyla silindi.' });
    } catch (error) {
        console.error('Arkadaş silme hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

module.exports = router;
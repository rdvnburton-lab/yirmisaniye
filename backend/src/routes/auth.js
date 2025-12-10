const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db').pool; // db.js'den pool'u import ediyoruz

const router = express.Router();

// @route   POST api/auth/register
// @desc    Register a user
// @access  Public
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Lütfen tüm alanları doldurun.' });
    }

    try {
        // Kullanıcının zaten var olup olmadığını kontrol et
        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Bu email veya kullanıcı adı zaten kullanılıyor.' });
        }

        // Şifreyi hash'le
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Yeni kullanıcıyı veritabanına ekle
        await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu.' });

    } catch (error) {
        console.error('Kayıt hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   POST api/auth/login
// @desc    Auth user & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(400).json({ message: 'Bu email ile kayıtlı kullanıcı bulunamadı.' });
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Girilen şifre yanlış.' });
        }

        // JWT oluştur
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'your_default_jwt_secret', { expiresIn: '1h' });

        res.json({ token, username: user.username, points: user.points, profile_picture: user.profile_picture });

    } catch (error) {
        console.error('Giriş hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

// @route   POST api/auth/change-password
// @desc    Change user password
// @access  Private (requires token)
const authMiddleware = require('../middleware/authMiddleware'); // We'll need to create this

router.post('/change-password', authMiddleware, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: 'Lütfen tüm alanları doldurun.' });
    }

    try {
        // Get user from DB
        const [users] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]);
        if (users.length === 0) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }
        const user = users[0];

        // Check if current password is correct
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mevcut şifreniz yanlış.' });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        // Update password in the database
        await pool.query('UPDATE users SET password = ? WHERE id = ?', [hashedNewPassword, userId]);

        res.json({ message: 'Şifreniz başarıyla güncellendi.' });
    } catch (error) {
        console.error('Şifre değiştirme hatası:', error);
        res.status(500).send('Sunucu hatası');
    }
});

module.exports = router;
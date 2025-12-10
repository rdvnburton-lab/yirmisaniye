const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Header'dan token'ı al
    const token = req.header('x-auth-token');

    // Token yoksa hata döndür
    if (!token) {
        return res.status(401).json({ message: 'Yetkilendirme reddedildi, token yok.' });
    }

    try {
        // Token'ı doğrula
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_default_jwt_secret');

        // Kullanıcı bilgisini request objesine ekle
        req.user = decoded.user;
        next();
    } catch (error) {
        // Token geçersizse hata döndür
        res.status(401).json({ message: 'Token geçersiz.' });
    }
};

module.exports = authMiddleware;
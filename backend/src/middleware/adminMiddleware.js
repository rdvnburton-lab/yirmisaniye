const adminMiddleware = (req, res, next) => {
    // authMiddleware zaten çalıştı ve req.user'ı doldurdu
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Erişim reddedildi. Yönetici yetkisi gerekiyor.' });
    }
};

module.exports = adminMiddleware;

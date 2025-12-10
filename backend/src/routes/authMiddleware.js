const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Header'dan token'ı al
  const token = req.header('x-auth-token');

  // Token yoksa kontrol et
  if (!token) {
    return res.status(401).json({ message: 'Yetkilendirme reddedildi, token bulunamadı.' });
  }

  // Token'ı doğrula
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_default_jwt_secret');
    req.user = decoded.user;
    next(); // Bir sonraki middleware'e veya rota işleyicisine geç
  } catch (err) {
    res.status(401).json({ message: 'Token geçerli değil.' });
  }
};
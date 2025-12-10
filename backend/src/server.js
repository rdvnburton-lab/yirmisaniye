const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { checkDbConnection, createUsersTable, createQuizTables, insertSampleData, getDbTables } = require('./config/db');

// Ortam değişkenlerini yükle
dotenv.config();

const app = express();

// Middleware'ler
app.use(cors()); // Farklı portlardan gelen isteklere izin ver
app.use(express.json()); // Gelen JSON verilerini işle

// Rotaları tanımla
app.use('/api/auth', require('./routes/auth'));
app.use('/api/quiz', require('./routes/quiz')); // Yeni quiz rotası
app.use('/api/friends', require('./routes/friends')); // Yeni arkadaşlık rotası
app.use('/api/users', require('./routes/users')); // Yeni kullanıcı rotası
app.use('/api/collections', require('./routes/collections')); // Yeni koleksiyon rotası
app.use('/api/store', require('./routes/store')); // Yeni mağaza rotası

// Ana Rota (Sağlık kontrolü için)
app.get('/api/health', async (req, res) => {
    const dbStatus = await checkDbConnection();
    const tables = await getDbTables();
    res.json({
        server: 'Running',
        database: dbStatus,
        tables: tables
    });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await checkDbConnection(); // Yeniden deneme mantığı ile bağlantıyı kontrol et
        await createUsersTable();
        await createQuizTables(); // Yeni tabloları oluştur
        await insertSampleData(); // Örnek verileri ekle
    
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1); // Veritabanı bağlantısı kurulamadıysa uygulamayı sonlandır
    }
};

startServer();
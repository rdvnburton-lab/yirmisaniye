const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { checkDbConnection, createUsersTable, createQuizTables, insertSampleData, getDbTables } = require('./config/db');
const path = require('path');

// Ortam değişkenlerini yükle
dotenv.config();

const app = express();

// Middleware'ler
app.use(cors()); // Farklı portlardan gelen isteklere izin ver
app.use(express.json()); // Gelen JSON verilerini işle

// --- ANGULAR UYGULAMASINI SUNMAK İÇİN EKLENEN KOD ---
// Derlenmiş Angular dosyalarının bulunduğu 'public' klasörünü statik olarak sun.
app.use(express.static(path.join(__dirname, '..', 'public')));
// ----------------------------------------------------

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

// --- ANGULAR ROUTING İÇİN FALLBACK ---
// API rotaları dışındaki tüm GET isteklerini Angular'ın index.html'ine yönlendir.
// Bu, Angular'ın client-side routing'inin çalışmasını sağlar.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
// ------------------------------------

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
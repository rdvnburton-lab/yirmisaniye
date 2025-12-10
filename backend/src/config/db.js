const mysql = require('mysql2/promise');

// Docker Compose'daki ortam değişkenlerini kullanarak bağlantı havuzu oluştur
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // 'db'
  user: process.env.DB_USER,       // 'user'
  password: process.env.DB_PASSWORD, // 'password'
  database: process.env.DB_NAME,     // 'yirmisaniye_db'
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const createUsersTable = async () => {
  const connection = await pool.getConnection();
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        profile_picture VARCHAR(255) DEFAULT NULL,
        points INT DEFAULT 100, -- Kullanıcıların harcayabileceği puanlar
        total_score INT DEFAULT 100, -- Kullanıcının hayat boyu kazandığı toplam puan (liderlik için)
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("'users' table checked/created successfully.");
  } catch (error) {
    console.error("Error creating 'users' table:", error);
  } finally {
    connection.release();
  }
};

const createQuizTables = async () => {
  const connection = await pool.getConnection();
  try {

    // Dersler Tablosu (Matematik, Türkçe vb.) - Sizin yapınıza göre güncellendi
    await connection.query(`
      CREATE TABLE IF NOT EXISTS soru_subjects (
        subject_id INT NOT NULL,
        subject_name VARCHAR(100) NOT NULL,
        subject_slug VARCHAR(100) NOT NULL,
        icon VARCHAR(20) DEFAULT NULL,
        PRIMARY KEY (subject_id)
      )
    `);
    console.log("'soru_subjects' table checked/created successfully.");

    // Konular Tablosu (Toplama, Cümle Öğeleri vb.) - Sizin yapınıza göre güncellendi
    await connection.query(`
      CREATE TABLE IF NOT EXISTS soru_topics (
        topic_id INT AUTO_INCREMENT PRIMARY KEY,
        topic_name VARCHAR(100) NOT NULL,
        subject_id INT NOT NULL,
        topic_slug VARCHAR(100) NOT NULL,
        icon VARCHAR(60) DEFAULT NULL,
        FOREIGN KEY (subject_id) REFERENCES soru_subjects(subject_id) ON DELETE CASCADE

        
      )
        
    `);
    console.log("'soru_topics' table checked/created successfully.");

    // Sorular Tablosu - Sizin yapınıza göre güncellendi
    await connection.query(`
      CREATE TABLE IF NOT EXISTS soru_questions (
        question_id INT NOT NULL,
        topic_id INT NOT NULL,
        difficulty ENUM('easy','medium','hard') NOT NULL,
        question_text TEXT NOT NULL,
        image_path VARCHAR(255) DEFAULT NULL,
        options LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
        correct_answer VARCHAR(255) NOT NULL,
        hint TEXT DEFAULT NULL,
        PRIMARY KEY (question_id),
        FOREIGN KEY (topic_id) REFERENCES soru_topics(topic_id) ON DELETE CASCADE
      )
    `);
    console.log("'soru_questions' table checked/created successfully.");

    // Quiz Oturumları Tablosu - SQL Hatası Düzeltildi
    await connection.query(`
      CREATE TABLE IF NOT EXISTS soru_quizzes (
        quiz_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        difficulty VARCHAR(10) NOT NULL,
        question_types VARCHAR(255) NOT NULL,
        is_timed BOOLEAN DEFAULT FALSE,
        total_score INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log("'soru_quizzes' table checked/created successfully.");

    // Cevap Logları Tablosu - Sizin yapınıza göre güncellendi
    await connection.query(`
      CREATE TABLE IF NOT EXISTS soru_answer_logs (
        log_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        quiz_id INT DEFAULT NULL,
        question_id INT DEFAULT NULL,
        question_text VARCHAR(255) NOT NULL,
        correct_answer VARCHAR(255) NOT NULL,
        user_answer VARCHAR(255) NOT NULL,
        is_correct BOOLEAN NOT NULL,
        question_type VARCHAR(20) NOT NULL,
        difficulty VARCHAR(10) NOT NULL,
        points_earned INT DEFAULT 0,
        time_taken INT NOT NULL,
        thinking_time INT NOT NULL DEFAULT 0,
        logged_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log("'soru_answer_logs' table checked/created successfully.");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS friendships (
        id INT AUTO_INCREMENT PRIMARY KEY,
        requester_id INT NOT NULL,
        addressee_id INT NOT NULL,
        status ENUM('pending', 'accepted', 'rejected', 'blocked') NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (requester_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (addressee_id) REFERENCES users(id) ON DELETE CASCADE,
        UNIQUE KEY unique_friendship (requester_id, addressee_id)
      )
    `);
    console.log("'friendships' table checked/created successfully.");

    // Avatarlar Tablosu
    await connection.query(`
      CREATE TABLE IF NOT EXISTS avatars (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        image_path VARCHAR(255) NOT NULL,
        unlock_condition VARCHAR(255) DEFAULT 'default', -- 'default', 'score:1000', 'achievement:first_quiz'
        cost INT DEFAULT 0
      )
    `);
    console.log("'avatars' table checked/created successfully.");

    // Rozetler Tablosu
    await connection.query(`
      CREATE TABLE IF NOT EXISTS badges (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        icon VARCHAR(255) NOT NULL,
        unlock_condition VARCHAR(255) NOT NULL -- 'quizzes_completed:10', 'streak:5'
      )
    `);
    console.log("'badges' table checked/created successfully.");

    // Kullanıcının Açtığı Öğeler Tablosu (Avatarlar ve Rozetler)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS user_unlocked_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        item_type ENUM('avatar', 'badge') NOT NULL,
        item_id INT NOT NULL,
        unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log("'user_unlocked_items' table checked/created successfully.");

    // Alışveriş Sepeti Tablosu
    await connection.query(`
      CREATE TABLE IF NOT EXISTS store_cart (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        item_type ENUM('avatar') NOT NULL,
        item_id INT NOT NULL,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        UNIQUE KEY unique_cart_item (user_id, item_type, item_id)
      )
    `);
    console.log("'store_cart' table checked/created successfully.");

    // Siparişler Tablosu
    await connection.query(`
      CREATE TABLE IF NOT EXISTS store_orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        total_cost INT NOT NULL,
        status ENUM('preparing', 'ready_for_delivery', 'delivered') NOT NULL DEFAULT 'preparing',
        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        delivery_date TIMESTAMP NULL DEFAULT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log("'store_orders' table checked/created successfully.");

    // Kullanıcı Puan İşlemleri Tablosu
    await connection.query(`
      CREATE TABLE IF NOT EXISTS user_point_transactions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        transaction_type ENUM('earn_quiz', 'spend_store') NOT NULL,
        amount INT NOT NULL,
        description VARCHAR(255),
        related_id INT, -- quiz_id veya order_id olabilir
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log("'user_point_transactions' table checked/created successfully.");
  } catch (error) { // Tüm tablo oluşturma hatalarını yakalayan tek catch bloğu
    console.error("Error creating quiz tables:", error);
  } finally {
    connection.release();
  }
};

const checkDbConnection = async (retries = 5, delay = 3000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const connection = await pool.getConnection();
      await connection.ping();
      connection.release();
      console.log('Database connection successful.');
      return { connected: true, message: 'Database connection successful.' };
    } catch (error) {
      console.error(`Database connection check failed (Attempt ${i + 1}/${retries}):`, error.message);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        console.error("Could not connect to the database after several retries.");
        // Hata fırlatarak uygulamanın çökmesini ve Docker'ın yeniden başlatmasını sağla
        throw new Error("Database connection failed: " + error.message);
      }
    }
  }
};

const getDbTables = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query('SHOW TABLES');
    // Sonucu ['users'] gibi basit bir diziye dönüştür
    const tableKey = `Tables_in_${process.env.DB_NAME}`;
    return rows.map(row => row[tableKey]);
  } catch (error) {
    console.error("Error fetching tables:", error.message);
    return []; // Hata durumunda boş dizi döndür
  } finally {
    if (connection) connection.release();
  }
};

const insertSampleData = async () => {
  const connection = await pool.getConnection();
  try {
    // Sadece avatarlar tablosu boşsa veri ekle (daha güvenilir bir kontrol)
    const [avatarsCheck] = await connection.query('SELECT COUNT(*) as count FROM avatars');
    if (avatarsCheck[0].count > 0) {
      console.log('Sample data already exists. Skipping insertion.');
      return;
    }

    console.log('Inserting sample data...');
    await connection.beginTransaction();

    // Örnek Kullanıcıları Ekle
    await connection.query(`
      INSERT INTO users (id, username, email, password, created_at, points, total_score) VALUES
      (1, 'rdvnburton', 'ridvanhsyn@gmail.com', '$2a$10$8q5yc4jUnCeJmP7XgftxeewO7NgJYCOKwLl2Rv.MvVyetz5W9Apq.', '2025-11-11 11:53:00', 100, 100),
      (2, 'Rzgr', 'Ruzgarsahin2017@gmail.com', '$2a$10$4/ULkKlR0Q8PMVV/Za0/husSOMmCiDkcc3IeBcAbPqIbDV11vTy1m', '2025-11-11 12:29:33', 100, 100);
    `);

    // 1. Örnek Dersleri Ekle
    // Not: Yeni konular subject_id 3 ve 4'ü kullandığı için Hayat Bilgisi ve Fen Bilimleri eklendi.
    await connection.query(`
      INSERT INTO soru_subjects (subject_id, subject_name, subject_slug, icon) VALUES
      (1, 'Matematik', 'math', NULL),
      (2, 'Türkçe', 'turkish', NULL),
      (3, 'Hayat Bilgisi', 'life_science', NULL),
      (4, 'Fen Bilimleri', 'science', NULL)
    `);

    // 2. Örnek Konuları Ekle
    // Not: topic_id'ler AUTO_INCREMENT olduğu için ID'leri manuel vermiyoruz.
    // Bunun yerine, soruları eklerken konuları isimleriyle bulacağız.
    await connection.query(
      `INSERT INTO soru_topics (topic_name, subject_id, topic_slug, icon) VALUES ?`,
      [[
        ['Toplama', 1, 'addition', 'pi pi-plus'],
        ['Çıkarma', 1, 'subtraction', 'pi pi-minus'],
        ['Çarpma', 1, 'multiplication', 'pi pi-times'],
        ['Bölme', 1, 'division', 'pi pi-percentage'],
        ['Yuvarlama', 1, 'rounding', 'pi pi-sync'],
        ['Noktalama İşaretleri', 2, 'punctuation', 'pi pi-question-circle'],
        ['Yazım Kuralları', 2, 'spelling', 'pi pi-pencil'],
        ['Zıt Anlam', 2, 'antonyms', 'pi pi-arrows-h'],
        ['Mevsimler', 3, 'seasons', 'pi pi-calendar'],
        ['Trafik Kuralları', 3, 'traffic_rules', 'pi pi-car'],
        ['Gezegenler', 4, 'planets', 'pi pi-globe'],
        ['Vücudumuz', 4, 'our_body', 'pi pi-heart'],
        ['Harf Bilgisi', 2, 'harfbilgisi', 'pi pi-sort-alpha-down'],
        ['Deyimler', 2, 'deyimler', 'pi pi-comment'],
        ['tanımsız', 2, 'tanimsiz', 'pi pi-tag'],
        ['Tanımsız', 4, 'tanimsiz_fen', 'pi pi-tag']
      ]]
    );

    // 3. Örnek Soruları Ekle
    // Seçenekleri JSON formatında string'e çeviriyoruz
    await connection.query(
      `INSERT INTO soru_questions (question_id, topic_id, difficulty, question_text, image_path, options, correct_answer, hint) VALUES ?`,
      [[
        // Not: topic_id'ler dinamik olarak atanır. Buradaki örnekler ilk konuya (Toplama) atanacaktır.
        // Daha çeşitli konulara atamak için topic_id'leri manuel olarak değiştirmeniz gerekebilir.
        [1,  4, 'easy', 'Aşağıdaki kelimelerden hangisi hecelerine yanlış ayrılmıştır?', null, JSON.stringify(["a-ta-sö-zü","tır-na-ğı-mız","de-ve-tü-yü","gök-del-en"]), 'gök-del-en', ''],
        [2,  4, 'easy', '"Mumla aramak" deyiminin anlamı nedir?', null, JSON.stringify(["Çok kolay bulmak","Değerli bir şey bulmak","Bulmak için çok uğraşmak","Sadece ışıkla aramak"]), 'Bulmak için çok uğraşmak', ''],
        [3,  4, 'easy', 'test', null, JSON.stringify(["1","2","3","4"]), '2', ''],
        [4,  4, 'easy', 'deneme', null, JSON.stringify(["1","w","e","d"]), 'd', ''],
        [6,  4, 'easy', 'test', 'assets/questions/q_1761934536_49f9b99bea8baac0.jpeg', JSON.stringify(["1","4","2","3"]), '4', ''],
        [7,  4, 'easy', 'En çok uydusu bulunan gezegen hangisidir?', null, JSON.stringify(["Satürn","Jüpiter","Mars","Merkür"]), 'Satürn', 'En Büyük 2. Gezegendir.'],
        [8,  4, 'easy', 'Hangi Gezegenin tek Uydusu vardır?', null, JSON.stringify(["Dünya","Venüs","Mars","Satürn"]), 'Dünya', 'Yaşadığımız Gezegendir.'],
        [9,  4, 'easy', 'sdfsdf', 'assets/questions/q_1761933593_d372f222a7a3e17c.jpeg', JSON.stringify(["sdfsdf","fds","hfg","asda"]), 'hfg', ''],
        [10, 4, 'easy', 'sdfsdf', null, JSON.stringify(["sdfsdfsd","ff","ss","dd"]), 'ff', ''],
        [11, 4, 'medium', 'Dünya\'ya en yakın gezegen hangisidir?', null, JSON.stringify(["Merkür","Venüs","fruit pack","Satürn"]), 'Merkür', ''],
        [12, 4, 'medium', 'hangi fruit pack daha iyidir?', null, JSON.stringify(["HAYRİ FRUİT PACK","KAMİL FRUİT PACK","MERT FRUİT PACK","AKIN FRUİT PACK"]), 'HAYRİ FRUİT PACK', '']
      ]]
    );

    // 4. Örnek Avatarları ve Rozetleri Ekle
    // Artık silmeye gerek yok, çünkü sadece tablo boşsa ekleme yapıyoruz.
    await connection.query(`
      INSERT INTO avatars (id, name, image_path, unlock_condition, cost) VALUES
      (1, 'Maceracı Tigin', 'assets/images/avatars/tigin-default.png', 'default', 0),
      (2, 'Bilge Baykuş', 'assets/images/avatars/owl-wise.png', 'score:1000', 1000),
      (3, 'Süper Roket', 'assets/images/avatars/rocket-super.png', 'quizzes_completed:25', 2500),
      (4, 'Robot Dost', 'assets/images/avatars/robot-friend.png', 'purchase', 1500),
      (5, 'Ninja Kedi', 'assets/images/avatars/cat-ninja.png', 'purchase', 3000),
      (6, 'Kaptan Penguen', 'assets/images/avatars/penguin-captain.png', 'purchase', 2000);
    `);

    await connection.query(`
      INSERT INTO badges (id, name, description, icon, unlock_condition) VALUES
      (1, 'İlk Adım', 'İlk quizini başarıyla tamamladın!', 'pi pi-flag-fill', 'quizzes_completed:1'),
      (2, 'Puan Canavarı', 'Toplamda 1000 puana ulaştın!', 'pi pi-star-fill', 'score:1000'),
      (3, 'Matematik Ustası', 'Matematik dersinden 10 quizi tamamladın.', 'pi pi-calculator', 'subject_quizzes_completed:1:10');
    `);

    // Örnek kullanıcıya varsayılan avatarı ata
    // Bu sorguyu da IGNORE ile bırakıyoruz ki tekrar tekrar aynı kaydı eklemesin.
    await connection.query(`
      INSERT IGNORE INTO user_unlocked_items (user_id, item_type, item_id) VALUES
      (1, 'avatar', 1),
      (2, 'avatar', 1);
    `);

    await connection.commit();
    console.log('Sample data inserted successfully.');

  } catch (error) {
    await connection.rollback();
    console.error("Error inserting sample data:", error);
  } finally {
    connection.release();
  }
};


module.exports = {
  pool,
  createUsersTable,
  createQuizTables,
  insertSampleData,
  checkDbConnection,
  getDbTables
};
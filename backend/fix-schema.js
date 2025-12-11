const { pool } = require('./src/config/db');

async function fix() {
    try {
        console.log("Altering soru_questions table...");
        await pool.query("ALTER TABLE soru_questions MODIFY question_id INT AUTO_INCREMENT");
        console.log("Success: question_id is now AUTO_INCREMENT");
    } catch (e) {
        console.error("Error altering table:", e);
    } finally {
        process.exit();
    }
}

fix();

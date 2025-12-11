const { pool } = require('./src/config/db');

async function check() {
    try {
        console.log("Checking soru_questions table...");
        const [rows] = await pool.query("DESCRIBE soru_questions");
        console.log(rows);

        console.log("Checking data...");
        const [data] = await pool.query("SELECT * FROM soru_questions LIMIT 5");
        console.log(data);
    } catch (e) {
        console.error(e);
    } finally {
        process.exit();
    }
}

check();

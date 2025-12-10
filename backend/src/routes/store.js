const express = require('express');
const router = express.Router();
const pool = require('../config/db').pool;
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/store/avatars
// @desc    Satın alınabilecek tüm avatarları listeler
// @access  Private
router.get('/avatars', authMiddleware, async (req, res) => {
    try {
        const [avatars] = await pool.query('SELECT id, name, image_path, cost FROM avatars WHERE unlock_condition != "default"');
        res.json(avatars);
    } catch (error) {
        res.status(500).send('Sunucu hatası');
    }
});

// @route   GET api/store/cart
// @desc    Kullanıcının sepetini getirir
// @access  Private
router.get('/cart', authMiddleware, async (req, res) => {
    try {
        const [cartItems] = await pool.query(`
            SELECT a.id, a.name, a.image_path, a.cost 
            FROM store_cart sc
            JOIN avatars a ON sc.item_id = a.id
            WHERE sc.user_id = ? AND sc.item_type = 'avatar'
        `, [req.user.id]);
        res.json(cartItems);
    } catch (error) {
        res.status(500).send('Sunucu hatası');
    }
});

// @route   POST api/store/cart
// @desc    Sepete ürün ekler
// @access  Private
router.post('/cart', authMiddleware, async (req, res) => {
    const { itemId, itemType } = req.body;
    if (itemType !== 'avatar') return res.status(400).json({ message: 'Geçersiz ürün tipi.' });

    try {
        // Kullanıcının bu ürüne zaten sahip olup olmadığını kontrol et
        const [owned] = await pool.query('SELECT id FROM user_unlocked_items WHERE user_id = ? AND item_type = ? AND item_id = ?', [req.user.id, itemType, itemId]);
        if (owned.length > 0) {
            return res.status(400).json({ message: 'Bu ürüne zaten sahipsiniz.' });
        }

        // Ürünü sepete ekle (eğer zaten yoksa)
        await pool.query('INSERT IGNORE INTO store_cart (user_id, item_type, item_id) VALUES (?, ?, ?)', [req.user.id, itemType, itemId]);
        res.status(201).json({ message: 'Ürün sepete eklendi.' });
    } catch (error) {
        res.status(500).send('Sunucu hatası');
    }
});

// @route   DELETE api/store/cart/:itemId
// @desc    Sepetten ürün siler
// @access  Private
router.delete('/cart/:itemId', authMiddleware, async (req, res) => {
    try {
        await pool.query('DELETE FROM store_cart WHERE user_id = ? AND item_type = "avatar" AND item_id = ?', [req.user.id, req.params.itemId]);
        res.json({ message: 'Ürün sepetten kaldırıldı.' });
    } catch (error) {
        res.status(500).send('Sunucu hatası');
    }
});

// @route   POST api/store/checkout
// @desc    Sepeti siparişe dönüştürür
// @access  Private
router.post('/checkout', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    let connection;
    try {
        connection = await pool.getConnection();
        await connection.beginTransaction();

        // 1. Kullanıcının sepetini ve toplam maliyeti al
        const [cartItems] = await connection.query('SELECT a.id, a.cost FROM store_cart sc JOIN avatars a ON sc.item_id = a.id WHERE sc.user_id = ?', [userId]);
        if (cartItems.length === 0) {
            await connection.rollback();
            return res.status(400).json({ message: 'Sepetiniz boş.' });
        }
        const totalCost = cartItems.reduce((sum, item) => sum + item.cost, 0);

        // 2. Kullanıcının puanını kontrol et
        const [users] = await connection.query('SELECT points FROM users WHERE id = ?', [userId]);
        const userPoints = users[0].points;

        if (userPoints < totalCost) {
            await connection.rollback();
            return res.status(400).json({ message: 'Yetersiz puan!' });
        }

        // 3. Puanı düş
        await connection.query('UPDATE users SET points = points - ? WHERE id = ?', [totalCost, userId]);

        // 4. Yeni bir sipariş oluştur
        const [orderResult] = await connection.query('INSERT INTO store_orders (user_id, total_cost) VALUES (?, ?)', [userId, totalCost]);
        const orderId = orderResult.insertId;

        // Puan harcama işlemini logla
        await connection.query(
            'INSERT INTO user_point_transactions (user_id, transaction_type, amount, description, related_id) VALUES (?, ?, ?, ?, ?)',
            [userId, 'spend_store', -totalCost, `Sipariş #${orderId}`, orderId]
        );

        // Sipariş durumunu simüle etmek için gecikmeli bir işlem
        // Gerçek bir uygulamada bu bir kuyruk sistemi veya cron job ile yapılır.
        setTimeout(async () => {
            const deliveryConnection = await pool.getConnection();
            await deliveryConnection.query('UPDATE store_orders SET status = "ready_for_delivery" WHERE id = ?', [orderId]);
            setTimeout(async () => {
                await deliveryConnection.query('UPDATE store_orders SET status = "delivered", delivery_date = CURRENT_TIMESTAMP WHERE id = ?', [orderId]);
                // Ürünleri kullanıcının kilidi açık öğelerine ekle
                for (const item of cartItems) {
                    await deliveryConnection.query('INSERT INTO user_unlocked_items (user_id, item_type, item_id) VALUES (?, "avatar", ?)', [userId, item.id]);
                }
                deliveryConnection.release();
            }, 10000); // 10 saniye sonra teslim edildi
        }, 5000); // 5 saniye sonra hazırlanıyor

        // 5. Sepeti temizle
        await connection.query('DELETE FROM store_cart WHERE user_id = ?', [userId]);

        await connection.commit();
        res.status(201).json({ message: 'Siparişiniz alındı ve hazırlanıyor!', newPoints: userPoints - totalCost });

    } catch (error) {
        if (connection) await connection.rollback();
        res.status(500).send('Sunucu hatası');
    } finally {
        if (connection) connection.release();
    }
});

// @route   GET api/store/orders
// @desc    Kullanıcının siparişlerini listeler
// @access  Private
router.get('/orders', authMiddleware, async (req, res) => {
    try {
        const [orders] = await pool.query('SELECT * FROM store_orders WHERE user_id = ? ORDER BY order_date DESC', [req.user.id]);
        res.json(orders);
    } catch (error) {
        res.status(500).send('Sunucu hatası');
    }
});

module.exports = router;
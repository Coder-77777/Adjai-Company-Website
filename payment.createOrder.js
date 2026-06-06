const db = require("./db.query");

async function createOrder(req, res) {
    try {
        const { userId, productId, amount, paymentMethod } = req.body;

        if (!userId || !productId || !amount || !paymentMethod) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields"
            });
        }

        const order = await db.query(
            `INSERT INTO orders (user_id, product_id, amount, payment_method, status)
             VALUES ($1, $2, $3, $4, 'pending')
             RETURNING *`,
            [userId, productId, amount, paymentMethod]
        );

        res.status(201).json({
            success: true,
            message: "Order created",
            order: order.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to create order"
        });
    }
}

module.exports = createOrder;
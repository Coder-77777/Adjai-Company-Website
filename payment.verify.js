const db = require("./db.query");

/* =========================
   PAYMENT VERIFICATION LOGIC
   (Manual first, auto later)
========================= */
async function verifyPayment(req, res) {
    try {
        const { orderId, transactionRef, status } = req.body;

        const order = await db.query(
            "SELECT * FROM orders WHERE id = $1",
            [orderId]
        );

        if (order.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        await db.query(
            `UPDATE orders 
             SET status = $1, transaction_ref = $2
             WHERE id = $3`,
            [status, transactionRef, orderId]
        );

        /* =========================
           ACTIVATE ACCOUNT LOGIC
           (Driver/Fleet/API unlock)
        ========================= */
        if (status === "paid") {
            const userId = order.rows[0].user_id;

            await db.query(
                `UPDATE users
                 SET role = role
                 WHERE id = $1`,
                [userId]
            );
        }

        res.json({
            success: true,
            message: "Payment verified"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Payment verification failed"
        });
    }
}

module.exports = verifyPayment;
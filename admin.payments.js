const db = require("./db.query");

async function getPayments(req, res) {
    try {
        const payments = await db.query(
            "SELECT * FROM payments ORDER BY created_at DESC"
        );

        res.json({
            success: true,
            payments: payments.rows
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch payments"
        });
    }
}

module.exports = getPayments;
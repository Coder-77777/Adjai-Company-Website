const db = require("./db.query");

async function dashboardData(req, res) {
    try {
        const users = await db.query("SELECT COUNT(*) FROM users");
        const products = await db.query("SELECT COUNT(*) FROM products");
        const payments = await db.query("SELECT COUNT(*) FROM payments");

        res.json({
            success: true,
            stats: {
                users: users.rows[0].count,
                products: products.rows[0].count,
                payments: payments.rows[0].count
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Dashboard error"
        });
    }
}

module.exports = dashboardData;
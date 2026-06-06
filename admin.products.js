const db = require("./db.query");

async function getAllProductsAdmin(req, res) {
    try {
        const products = await db.query(
            "SELECT * FROM products ORDER BY created_at DESC"
        );

        res.json({
            success: true,
            products: products.rows
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch products"
        });
    }
}

module.exports = getAllProductsAdmin;
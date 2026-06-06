const db = require("./db.query");

async function getProductById(req, res) {
    try {
        const { id } = req.params;

        const product = await db.query(
            "SELECT * FROM products WHERE id = $1",
            [id]
        );

        if (product.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.json({
            success: true,
            product: product.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error retrieving product"
        });
    }
}

module.exports = getProductById;
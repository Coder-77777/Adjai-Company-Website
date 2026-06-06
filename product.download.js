const db = require("./db.query");
const checkAccess = require("./product.access");

async function downloadProduct(req, res) {
    try {
        const { userId, productId } = req.body;

        const allowed = await checkAccess(userId, productId);

        if (!allowed) {
            return res.status(403).json({
                success: false,
                message: "Access denied. Purchase required."
            });
        }

        const product = await db.query(
            "SELECT * FROM products WHERE id = $1",
            [productId]
        );

        res.json({
            success: true,
            message: "Download authorized",
            product: product.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Download failed"
        });
    }
}

module.exports = downloadProduct;
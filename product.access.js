const db = require("./db.query");

/* =========================
   CHECK PRODUCT ACCESS
========================= */
async function checkAccess(userId, productId) {
    const user = await db.query(
        "SELECT * FROM users WHERE id = $1",
        [userId]
    );

    const product = await db.query(
        "SELECT * FROM products WHERE id = $1",
        [productId]
    );

    if (!user.rows.length || !product.rows.length) {
        return false;
    }

    const role = user.rows[0].role;
    const access = product.rows[0].access_level;

    /* =========================
       ACCESS RULES
    ========================= */
    if (access === "free") return true;

    if (role === "admin") return true;

    if (access === "paid" && role !== "user") return true;

    return false;
}

module.exports = checkAccess;
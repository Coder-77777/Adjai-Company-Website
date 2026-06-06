const db = require("./db.query");

async function me(req, res) {
    try {
        const userId = req.user.userId;

        const user = await db.query(
            "SELECT id, name, email, role FROM users WHERE id = $1",
            [userId]
        );

        if (!user.rows.length) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            user: user.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch user"
        });
    }
}

module.exports = me;
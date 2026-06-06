const db = require("./db.query");

async function getAllUsers(req, res) {
    try {
        const users = await db.query(
            "SELECT id, name, email, role, created_at FROM users"
        );

        res.json({
            success: true,
            users: users.rows
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to fetch users"
        });
    }
}

module.exports = getAllUsers;
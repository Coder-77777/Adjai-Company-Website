const db = require("./db.query");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function adminLogin(req, res) {
    try {
        const { email, password } = req.body;

        const admin = await db.query(
            "SELECT * FROM admins WHERE email = $1",
            [email]
        );

        if (!admin.rows.length) {
            return res.status(401).json({
                success: false,
                message: "Invalid admin credentials"
            });
        }

        const valid = await bcrypt.compare(
            password,
            admin.rows[0].password_hash
        );

        if (!valid) {
            return res.status(401).json({
                success: false,
                message: "Invalid admin credentials"
            });
        }

        const token = jwt.sign(
            {
                adminId: admin.rows[0].id,
                role: "admin"
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            success: true,
            message: "Admin login successful",
            token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Admin login failed"
        });
    }
}

module.exports = adminLogin;
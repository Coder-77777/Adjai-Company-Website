const db = require("./db.query");

async function createContent(req, res) {
    try {
        const { title, body, type } = req.body;

        const content = await db.query(
            `INSERT INTO content (title, body, type)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [title, body, type]
        );

        res.json({
            success: true,
            message: "Content published",
            content: content.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to publish content"
        });
    }
}

module.exports = createContent;
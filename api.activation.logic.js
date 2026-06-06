const db = require("./db.query");

/* =========================
   ACTIVATE SPECIAL ACCOUNTS
   DRIVER / FLEET / DEVELOPER
========================= */
async function activateAccount(userId, type) {
    if (type === "driver" || type === "fleet") {
        await db.query(
            `UPDATE users SET role = $1 WHERE id = $2`,
            [type, userId]
        );
    }

    if (type === "developer") {
        await db.query(
            `UPDATE users SET role = 'developer' WHERE id = $1`,
            [userId]
        );
    }

    return true;
}

module.exports = activateAccount;
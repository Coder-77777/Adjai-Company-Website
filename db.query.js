const pool = require("./db.connection");

module.exports = {
    query: (text, params) => pool.query(text, params)
};
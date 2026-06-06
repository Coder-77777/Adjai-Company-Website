const { Pool } = require("pg");
const config = require("./env.config");

const pool = new Pool({
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASSWORD
});

pool.connect()
    .then(() => {
        console.log("POSTGRESQL CONNECTED SUCCESSFULLY");
    })
    .catch((err) => {
        console.error("DATABASE CONNECTION FAILED:", err);
    });

module.exports = pool;
module.exports = {
    PORT: Number(process.env.PORT) || 5000,

    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: Number(process.env.DB_PORT) || 5432,
    DB_NAME: process.env.DB_NAME || "adjai_db",
    DB_USER: process.env.DB_USER || "postgres",
    DB_PASSWORD: process.env.DB_PASSWORD || "",

    JWT_SECRET: process.env.JWT_SECRET || "adjai_secret_key_change_me",

    PAYMENT_MODE: process.env.PAYMENT_MODE || "sandbox"
};
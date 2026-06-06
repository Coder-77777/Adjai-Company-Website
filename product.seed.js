const db = require("./db.query");

/* =========================
   INITIAL PRODUCT SETUP
========================= */
async function seedProducts() {
    await db.query(`
        INSERT INTO products (name, description, price, type, access_level)
        VALUES 
        ('THE SAMARITAN', 'AI-powered civic intelligence system', 9500, 'ai-system', 'paid'),
        ('ADJAI OS', 'Next-gen operating system concept', 0, 'os', 'free'),
        ('Chemistry AI Guide', 'AI tutor for chemistry learning', 1500, 'education', 'paid'),
        ('Taxi Hail App', 'Ride-hailing platform for Africa', 0, 'transport', 'beta')
    `);

    console.log("PRODUCTS SEEDED SUCCESSFULLY");
}

module.exports = seedProducts;
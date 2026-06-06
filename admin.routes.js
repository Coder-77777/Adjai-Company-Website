const express = require("express");
const adminLogin = require("./admin.login");
const adminMiddleware = require("./admin.middleware");

const router = express.Router();

/* =========================
   ADMIN LOGIN
========================= */
router.post("/login", adminLogin);

/* =========================
   ADMIN DASHBOARD (TEST)
========================= */
router.get("/dashboard", adminMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to ADJAI Admin Dashboard"
    });
});

module.exports = router;
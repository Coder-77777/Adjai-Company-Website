const express = require("express");

const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");
const paymentRoutes = require("./payment.routes");
const adminRoutes = require("./admin.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/payments", paymentRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
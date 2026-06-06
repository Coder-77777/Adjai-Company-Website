const express = require("express");
const paymentController = require("./payment.controller");

const router = express.Router();

/* =========================
   MPESA PAYMENT
========================= */
router.post("/mpesa", paymentController.mpesaPayment);

/* =========================
   PAYPAL PAYMENT
========================= */
router.post("/paypal", paymentController.paypalPayment);

/* =========================
   VERIFY PAYMENT
========================= */
router.get("/verify/:reference", paymentController.verifyPayment);

module.exports = router;
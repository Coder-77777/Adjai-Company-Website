const express = require("express");

const register = require("./auth.register");
const login = require("./auth.login");
const me = require("./auth.me");
const authMiddleware = require("./auth.middleware");

const router = express.Router();

/* =========================
   REGISTER USER
========================= */
router.post("/register", register);

/* =========================
   LOGIN USER
========================= */
router.post("/login", login);

/* =========================
   GET CURRENT USER
========================= */
router.get("/me", authMiddleware, me);

module.exports = router;
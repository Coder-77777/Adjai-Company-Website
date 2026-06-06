const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname)));

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   LOAD ROUTES
========================= */
const routes = require("./app.routes");
app.use("/api", routes);

/* =========================
   HEALTH CHECK
========================= */
app.get("/health", (req, res) => {
    res.json({
        system: "ADJAI SOFTWARE DEVELOPERS",
        status: "LIVE",
        message: "ADJAI Ecosystem Fully Operational",
        timestamp: new Date().toISOString()
    });
});

/* =========================
   404 HANDLER
========================= */
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

/* =========================
   GLOBAL ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
    console.error("SERVER ERROR:", err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 ADJAI SYSTEM RUNNING ON PORT ${PORT}`);
});
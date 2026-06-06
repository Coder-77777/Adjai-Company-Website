const express = require("express");

const router = express.Router();

/* =========================
   PRODUCTS LIST
========================= */
router.get("/", async (req, res) => {

    const products = [

        {
            id: 1,
            name: "THE SAMARITAN",
            description:
                "AI-powered civic intelligence platform.",
            price: 25000
        },

        {
            id: 2,
            name: "ADJAI OS",
            description:
                "Next generation operating system.",
            price: 9500
        },

        {
            id: 3,
            name: "Chemistry AI Guide",
            description:
                "AI tutor for chemistry students.",
            price: 3500
        },

        {
            id: 4,
            name: "Taxi Hail App",
            description:
                "Ride-hailing platform for drivers and passengers.",
            price: 15000
        }

    ];

    res.json({
        success: true,
        products
    });

});

module.exports = router;
const db = require("./db.query");

exports.createOrder = async (req, res) => {

    try {

        const {
            userId,
            productId,
            amount,
            paymentMethod
        } = req.body;

        const result = await db.query(
            `
            INSERT INTO orders
            (
                user_id,
                product_id,
                amount,
                payment_method,
                status
            )
            VALUES
            (
                $1,$2,$3,$4,$5
            )
            RETURNING *
            `,
            [
                userId,
                productId,
                amount,
                paymentMethod,
                "PENDING"
            ]
        );

        res.status(201).json({
            success: true,
            order: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Order creation failed"
        });

    }
};

exports.getOrders = async (req, res) => {

    try {

        const result = await db.query(
            "SELECT * FROM orders ORDER BY id DESC"
        );

        res.status(200).json({
            success: true,
            orders: result.rows
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch orders"
        });

    }
};
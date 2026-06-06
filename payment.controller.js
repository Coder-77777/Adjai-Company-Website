const mpesaService = require("./mpesa.service");
const paypalService = require("./paypal.service");

exports.mpesaPayment = async (req, res) => {
    try {
        const { phone, amount, productId } = req.body;

        const result = await mpesaService.initiateSTKPush(
            phone,
            amount,
            productId
        );

        res.status(200).json({
            success: true,
            payment: result
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "M-Pesa payment failed"
        });
    }
};

exports.paypalPayment = async (req, res) => {
    try {
        const { amount, productId } = req.body;

        const result = await paypalService.createOrder(
            amount,
            productId
        );

        res.status(200).json({
            success: true,
            payment: result
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "PayPal payment failed"
        });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { reference } = req.params;

        res.status(200).json({
            success: true,
            reference,
            status: "PENDING"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Verification failed"
        });
    }
};
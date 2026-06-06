class PaymentService {

    /* =========================
       MPESA PLACEHOLDER
    ========================= */
    static async mpesaPayment(phone, amount) {
        return {
            status: "pending",
            method: "mpesa",
            message: "M-Pesa integration pending API setup"
        };
    }

    /* =========================
       PAYPAL PLACEHOLDER
    ========================= */
    static async paypalPayment(email, amount) {
        return {
            status: "pending",
            method: "paypal",
            message: "PayPal integration pending setup"
        };
    }

    /* =========================
       VISA/Mastercard PLACEHOLDER
    ========================= */
    static async cardPayment(cardDetails, amount) {
        return {
            status: "pending",
            method: "card",
            message: "Card payment integration pending gateway setup"
        };
    }
}

module.exports = PaymentService;
const paypal = require("@paypal/checkout-server-sdk");

exports.createOrder = async (
    amount,
    productId
) => {

    /*
      Replace with actual PayPal SDK setup.

      Requires:
      PAYPAL_CLIENT_ID
      PAYPAL_CLIENT_SECRET
    */

    return {
        method: "PAYPAL",
        amount,
        productId,
        status: "PENDING",
        orderId: "PAYPAL_PLACEHOLDER"
    };
};
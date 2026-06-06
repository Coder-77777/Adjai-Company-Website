const axios = require("axios");

const MPESA_PHONE = "+254118295002";

exports.initiateSTKPush = async (
    customerPhone,
    amount,
    productId
) => {

    /*
      Replace this mock implementation
      with actual Daraja integration
      after obtaining:

      MPESA_CONSUMER_KEY
      MPESA_CONSUMER_SECRET
      SHORTCODE
      PASSKEY
    */

    return {
        method: "MPESA",
        customerPhone,
        businessPhone: MPESA_PHONE,
        amount,
        productId,
        status: "PENDING",
        message: "STK Push Placeholder"
    };
};
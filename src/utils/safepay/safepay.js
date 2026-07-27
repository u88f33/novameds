import { Safepay } from '@sfpy/node-sdk'
import dotenv from "dotenv";

dotenv.config();

const safepay = new Safepay({
  environment: 'sandbox',
  apiKey: process.env.SAFEPAY_API_KEY,
  v1Secret: process.env.SAFEPAY_SECRET_KEY,
  webhookSecret: process.env.SAFEPAY_WEBHOOK_KEY
});

async function generateSafepayUrl( 
    amount = 0, 
    currency = 'PKR', 
    orderId = "no_order_id_found", redirectUrl, cancelUrl ) {

    const { token } = await safepay.payments.create({
        amount,
        currency
    });

    const url = safepay.checkout.create({
        token,
        orderId,
        cancelUrl,
        redirectUrl,
        source: 'custom',
        webhooks: true
    });

    return url;
}

async function generateSafepayWebhook( request ) {
    const valid = await safepay.verify.webhook(request)

    return valid;
}

export { 
    generateSafepayWebhook 
};
export default generateSafepayUrl;
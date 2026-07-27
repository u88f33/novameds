import express from "express";
import WebhookBySafepayServer from
"../../../../controllers/payments/safepay/webhook/webhook.controller.js";
const router = express.Router();

router.post( "/webhook/safepay", WebhookBySafepayServer );

export default router;
import express from "express";
import WebhookRoute from "./safepay/webhook/webhook.route.js";
const router = express.Router();

router.use( "/", WebhookRoute );

export default router;
import express from "express";

const router = express.Router();

router.post( "/webhook/safepay", WebhookBySafepayServer );

export default router;
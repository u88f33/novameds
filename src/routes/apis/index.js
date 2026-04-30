import express from "express";
import CustomerDataRoute from "./customer.route.js";

const router = express.Router();

router.use( "/apis", CustomerDataRoute );

export default router;
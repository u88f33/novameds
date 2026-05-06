import express from "express";
import DailySalesReportRoute from "./daily-sales.route.js";
const router = express.Router();

router.use( "/", DailySalesReportRoute );

export default router;
import express from "express";
import DailySalesReportCtrl
from "../../../../controllers/admin/manage/reports/daily-sales.controller.js"

const router = express.Router();

router.get( "/manage/sales/report/daily", DailySalesReportCtrl );

export default router;
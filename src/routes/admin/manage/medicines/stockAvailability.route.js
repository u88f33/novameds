import express from "express"
import StockAvailablityReportPdfCtrl from 
"../../../../controllers/admin/manage/medicines/stockAvailability.controller.js";

const router = express.Router();

router.get(
    "/",
    StockAvailablityReportPdfCtrl
);

export default router;
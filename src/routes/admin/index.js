import express from "express";
import AdminMainRoute from "./main/main.route.js";
import MedicinesMgmtByAdmin from "./manage/medicines/index.js";
import CustomersMgmtByAdmin from "./manage/customers/index.js";
import SuppliersMgmtByAdmin from "./manage/suppliers/index.js";
import OrdersMgmtByAdmin from "./manage/orders/index.js";
import ReportMgmtByAdmin from "./manage/reports/index.js";

const router = express.Router();

router.use( "/", AdminMainRoute );
router.use( "/", MedicinesMgmtByAdmin );
router.use( "/", CustomersMgmtByAdmin );
router.use( "/", SuppliersMgmtByAdmin );
router.use( "/", OrdersMgmtByAdmin );
router.use( "/", ReportMgmtByAdmin );

export default router;
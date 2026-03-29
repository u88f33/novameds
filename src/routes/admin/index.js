import express from "express";
import AdminMainRoute from "./main/main.route.js";
import MedicinesMgmtByAdmin from "./manage/medicines/index.js";
import CustomersMgmtByAdmin from "./manage/customers/index.js";
import SuppliersMgmtByAdmin from "./manage/suppliers/index.js";
import OrdersMgmtByAdmin from "./manage/orders/index.js";

const router = express.Router();

router.use( "/admin", AdminMainRoute );
router.use( "/admin", MedicinesMgmtByAdmin );
router.use( "/admin", CustomersMgmtByAdmin );
router.use( "/admin", SuppliersMgmtByAdmin );
router.use( "/admin", OrdersMgmtByAdmin );

export default router;
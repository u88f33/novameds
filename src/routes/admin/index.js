import express from "express";
import AdminMainRoute from "./main/main.route.js";
import MedicinesMgmtByAdmin from "./manage/medicines/index.js"

const router = express.Router();

router.use( "/admin", AdminMainRoute );
router.use( "/admin", MedicinesMgmtByAdmin );

export default router;
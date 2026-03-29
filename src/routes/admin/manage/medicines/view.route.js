import express from "express";
import ViewMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/view.controller.js"

const router = express.Router();

router.get( "/:id", ViewMedicineRecordCtrl );

export default router;
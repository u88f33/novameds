import express from "express";
import UpdateMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/update/update_get.controller.js"

const router = express.Router();

router.get( "/:id", UpdateMedicineRecordCtrl );

export default router;
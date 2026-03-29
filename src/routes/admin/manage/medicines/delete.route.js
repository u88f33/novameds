import express from "express";
import DeleteMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/delete.controller.js"

const router = express.Router();

router.get( "/:id", DeleteMedicineRecordCtrl );

export default router;
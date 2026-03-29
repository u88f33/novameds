import express from "express";
import AddMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/add/add_get.controller.js"

const router = express.Router();

router.get( "/", AddMedicineRecordCtrl );

export default router;
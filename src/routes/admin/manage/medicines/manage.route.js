import express from "express";
import ManageMedicineRecordsCtrl 
from "../../../../controllers/admin/manage/medicines/manage.controller.js"

const router = express.Router();

router.get( "/", ManageMedicineRecordsCtrl );

export default router;
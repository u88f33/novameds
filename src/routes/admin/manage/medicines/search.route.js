import express from "express";

import searchMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/search.controller.js";

const router = express.Router();

router.get( "/", searchMedicineRecordCtrl );

export default router;
import express from "express";
import AddMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/add/add_get.controller.js"

import AddMedicineRecortCtrlPost
from "../../../../controllers/admin/manage/medicines/add/add_post.controller.js"

const router = express.Router();

router.get( "/", AddMedicineRecordCtrl );
router.post( "/", AddMedicineRecortCtrlPost );

export default router;
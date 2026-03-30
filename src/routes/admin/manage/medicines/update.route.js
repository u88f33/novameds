import express from "express";
import UpdateMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/update/update_get.controller.js"

import UpdateMedicineRecordCtrlPost
from "../../../../controllers/admin/manage/medicines/update/update_post.controller.js"

const router = express.Router();

router.get( "/:id", UpdateMedicineRecordCtrl );
router.post( "/:id", UpdateMedicineRecordCtrlPost );

export default router;
import express from "express";
import UpdateSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/update/update_get.controller.js"

import UpdateSupplierRecordsCtrlPost
from "../../../../controllers/admin/manage/suppliers/update/update_post.controller.js"


const router = express.Router();

router.get( "/:id", UpdateSupplierRecordsCtrl );
router.post( "/:id", UpdateSupplierRecordsCtrlPost );

export default router;
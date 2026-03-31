import express from "express";
import AddSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/add/add_get.controller.js"

import AddSupplierRecordsCtrlPost
from "../../../../controllers/admin/manage/suppliers/add/add_post.controller.js"


const router = express.Router();

router.get( "/", AddSupplierRecordsCtrl );
router.post( "/", AddSupplierRecordsCtrlPost );

export default router;
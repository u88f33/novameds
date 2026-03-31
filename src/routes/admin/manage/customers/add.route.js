import express from "express";
import AddCustomerRecordCtrl 
from "../../../../controllers/admin/manage/customers/add/add_get.controller.js"

import AddCustomerRecordCtrlPost
from "../../../../controllers/admin/manage/customers/add/add_post.controller.js"


const router = express.Router();

router.get( "/", AddCustomerRecordCtrl );
router.post( "/", AddCustomerRecordCtrlPost );

export default router;
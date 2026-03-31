import express from "express";
import UpdateCustomerRecordCtrl 
from "../../../../controllers/admin/manage/customers/update/update_get.controller.js"

import UpdateCustomerRecordCtrlPost 
from "../../../../controllers/admin/manage/customers/update/update_post.controller.js"

const router = express.Router();

router.get( "/:id", UpdateCustomerRecordCtrl );
router.post( "/:id", UpdateCustomerRecordCtrlPost );

export default router;
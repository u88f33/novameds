import express from "express";
import UpdateCustomerRecordCtrl 
from "../../../../controllers/admin/manage/customers/update/update_get.controller.js"

const router = express.Router();

router.get( "/:id", UpdateCustomerRecordCtrl );

export default router;
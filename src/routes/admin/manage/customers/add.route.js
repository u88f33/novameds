import express from "express";
import AddCustomerRecordCtrl 
from "../../../../controllers/admin/manage/customers/add/add_get.controller.js"

const router = express.Router();

router.get( "/", AddCustomerRecordCtrl );

export default router;
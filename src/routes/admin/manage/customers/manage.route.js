import express from "express";
import ManageCustomerRecordsCtrl 
from "../../../../controllers/admin/manage/customers/manage.controller.js"

const router = express.Router();

router.get( "/", ManageCustomerRecordsCtrl );

export default router;
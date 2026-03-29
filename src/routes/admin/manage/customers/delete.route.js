import express from "express";
import DeleteCustomerRecordCtrl 
from "../../../../controllers/admin/manage/customers/delete.controller.js"

const router = express.Router();

router.get( "/:id", DeleteCustomerRecordCtrl );

export default router;
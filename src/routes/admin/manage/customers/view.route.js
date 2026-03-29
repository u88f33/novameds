import express from "express";
import ViewCustomerRecordCtrl 
from "../../../../controllers/admin/manage/customers/view.controller.js"

const router = express.Router();

router.get( "/:id", ViewCustomerRecordCtrl );

export default router;
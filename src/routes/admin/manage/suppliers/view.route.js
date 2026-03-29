import express from "express";
import ViewSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/view.controller.js"

const router = express.Router();

router.get( "/:id", ViewSupplierRecordsCtrl );

export default router;
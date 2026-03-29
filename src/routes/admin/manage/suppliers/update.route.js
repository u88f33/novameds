import express from "express";
import UpdateSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/update/update_get.controller.js"

const router = express.Router();

router.get( "/:id", UpdateSupplierRecordsCtrl );

export default router;
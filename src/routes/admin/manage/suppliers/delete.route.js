import express from "express";
import DeleteSupplierRecordCtrl
from "../../../../controllers/admin/manage/suppliers/delete.controller.js"

const router = express.Router();

router.get( "/:id", DeleteSupplierRecordCtrl );

export default router;
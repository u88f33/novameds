import express from "express";
import ManageSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/manage.controller.js"

const router = express.Router();

router.get( "/", ManageSupplierRecordsCtrl );

export default router;
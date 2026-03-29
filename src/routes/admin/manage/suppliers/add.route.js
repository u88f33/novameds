import express from "express";
import AddSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/add/add_get.controller.js"

const router = express.Router();

router.get( "/", AddSupplierRecordsCtrl );

export default router;
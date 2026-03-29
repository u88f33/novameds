import express from "express";
import AddOrderRecordCtrl 
from "../../../../controllers/admin/manage/orders/add/add_get.controller.js"

const router = express.Router();

router.get( "/", AddOrderRecordCtrl );

export default router;
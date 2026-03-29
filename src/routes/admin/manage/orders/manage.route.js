import express from "express";
import ManageOrderRecordsCtrl 
from "../../../../controllers/admin/manage/orders/manage.controller.js"

const router = express.Router();

router.get( "/", ManageOrderRecordsCtrl );

export default router;
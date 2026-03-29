import express from "express";
import UpdateOrderRecordsCtrl 
from "../../../../controllers/admin/manage/orders/update/update_get.controller.js"

const router = express.Router();

router.get( "/:id", UpdateOrderRecordsCtrl );

export default router;
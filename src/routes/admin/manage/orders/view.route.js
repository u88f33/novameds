import express from "express";
import ViewOrderRecordsCtrl 
from "../../../../controllers/admin/manage/orders/view.controller.js"

const router = express.Router();

router.get( "/:id", ViewOrderRecordsCtrl );

export default router;
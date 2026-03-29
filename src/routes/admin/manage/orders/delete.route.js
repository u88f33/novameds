import express from "express";
import DeleteOrderRecordsCtrl 
from "../../../../controllers/admin/manage/orders/delete.controller.js"

const router = express.Router();

router.get( "/:id", DeleteOrderRecordsCtrl );

export default router;
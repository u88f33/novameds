import express from "express";

import searchCustomerRecordCtrl 
from "../../../../controllers/admin/manage/customers/search.controller.js";

const router = express.Router();

router.get( "/", searchCustomerRecordCtrl );

export default router;
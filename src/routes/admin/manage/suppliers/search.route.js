import express from "express"

import SearchSuppliersApiCtrl 
from "../../../../controllers/admin/manage/suppliers/search.controller.js"

const router = express.Router();

router.get("/", SearchSuppliersApiCtrl);

export default router;
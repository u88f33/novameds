import express from "express";
import searchOrderApiCtrl 
from "../../../../controllers/admin/manage/orders/search.controller.js";

const router = express.Router();

router.get( "/", searchOrderApiCtrl );

export default router;
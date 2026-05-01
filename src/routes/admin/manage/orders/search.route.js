import express from "express";
import customersOrderApi 
from "../../../../controllers/admin/manage/orders/search.controller.js";

const router = express.Router();

router.get( "/", customersOrderApi );

export default router;
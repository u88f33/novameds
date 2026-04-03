import express from "express";
import ProductPageCtrl from "../../controllers/user/product.controller.js"
const router = express.Router();

router.get( "/:id", ProductPageCtrl );

export default router;
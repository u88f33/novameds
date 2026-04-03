import express from "express";
import CartPageCtrl from "../../controllers/user/cart.controller.js"
const router = express.Router();

router.get( "/", CartPageCtrl );

export default router;
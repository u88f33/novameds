import express from "express";
import CartPageCtrl from "../../controllers/user/cart/cart.controller.js"
import CartPageCtrlPost from "../../controllers/user/cart/cart_post.controller.js"
const router = express.Router();

router.get( "/", CartPageCtrl );
router.post( "/:id", CartPageCtrlPost );

export default router;
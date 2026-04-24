import express from "express";
import CartPageCtrl from "../../controllers/user/cart/cart.controller.js";
import CartItemAddCtrl from "../../controllers/user/cart/cart_post.controller.js";
import CartItemDeleteCtrl from "../../controllers/user/cart/cart_delete.controller.js";
import CartItemsApiCtrl from "../../controllers/user/cart/cart_api.controller.js";
import CheckoutPageCtrl from "../../controllers/user/cart/checkout/checkout.controller.js";
import CheckoutPageCtrlPost from "../../controllers/user/cart/checkout/checkout_post.controller.js";

const router = express.Router();

router.get( "/", CartPageCtrl );
router.post( "/add/:id", CartItemAddCtrl );
router.delete( "/delete/:id", CartItemDeleteCtrl );
router.get( "/api", CartItemsApiCtrl );

router.get( "/checkout", CheckoutPageCtrl )
router.post( "/checkout", CheckoutPageCtrlPost );

export default router;
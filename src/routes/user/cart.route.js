import express from "express";
import CartPageCtrl from "../../controllers/user/cart/cart.controller.js";
import CartItemAddCtrl from "../../controllers/user/cart/cart_post.controller.js";
import CartItemDeleteCtrl from "../../controllers/user/cart/cart_delete.controller.js";
import CartItemsApiCtrl from "../../controllers/user/cart/cart_api.controller.js";

const router = express.Router();

router.get( "/", CartPageCtrl );
router.post( "/add/:id", CartItemAddCtrl );
router.delete( "/delete/:id", CartItemDeleteCtrl );
router.get( "/api", CartItemsApiCtrl );

export default router;
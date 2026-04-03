import UserProfilePageRoute from "./profile.route.js";
import ProfileProductPageRoute from "./product.route.js"
import ProfileCartPageRoute from "./cart.route.js"
import express from "express"

const router = express.Router();

router.use( "/profile", UserProfilePageRoute );
router.use( "/profile/product", ProfileProductPageRoute );
router.use( "/profile/cart", ProfileCartPageRoute );


export default router;
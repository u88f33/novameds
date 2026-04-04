import UserProfilePageRoute from "./profile.route.js";
import ProfileProductPageRoute from "./product.route.js"
import ProfileCartPageRoute from "./cart.route.js"
import ProfileSettingsPageRoute from "./settings.route.js"
import express from "express"

const router = express.Router();

router.use( "/profile", UserProfilePageRoute );
router.use( "/profile/product", ProfileProductPageRoute );
router.use( "/profile/cart", ProfileCartPageRoute );
router.use( "/profile/settings", ProfileSettingsPageRoute );


export default router;
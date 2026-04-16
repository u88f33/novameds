import UserProfilePageRoute from "./profile.route.js";
import ProfileProductPageRoute from "./product.route.js"
import ProfileCartPageRoute from "./cart.route.js"
import ProfileSettingsPageRoute from "./settings.route.js"
import express from "express"

const router = express.Router();

router.use( "/", UserProfilePageRoute );
router.use( "/product", ProfileProductPageRoute );
router.use( "/cart", ProfileCartPageRoute );
router.use( "/settings", ProfileSettingsPageRoute );


export default router;
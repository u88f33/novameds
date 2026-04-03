import UserProfilePageRoute from "./profile.route.js";
import ProfileProductPageRoute from "./product.route.js"
import express from "express"

const router = express.Router();

router.use( "/profile", UserProfilePageRoute );
router.use( "/profile/product", ProfileProductPageRoute );


export default router;
import UserProfilePageRoute from "./profile.route.js";
import express from "express"

const router = express.Router();

router.use( "/profile", UserProfilePageRoute );


export default router;
 import express from "express";
import LoginRoute from "./login.route.js";
import RegisterRoute from "./register.route.js"
import LogoutRoute from "./logout.route.js";
import ForgotPasswordRoute from "./forgot_password/user/user.route.js"

const router = express.Router();


router.use( "/", LoginRoute );
router.use( "/", RegisterRoute );
router.use( "/", LogoutRoute );
router.use( "/", ForgotPasswordRoute );


export default router;
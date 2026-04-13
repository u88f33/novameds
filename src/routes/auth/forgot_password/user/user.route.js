import express from "express";
import UserForgotPasswordCtrl 
from "../../../../controllers/auth/forgot_password/user/user_get.controller.js";

import UserForgotPasswordCtrlPost
from "../../../../controllers/auth/forgot_password/user/user_post.controller.js"

const router = express.Router();

router.get( "/user/forgot", UserForgotPasswordCtrl);
router.post( "/user/forgot", UserForgotPasswordCtrlPost );

export default router;
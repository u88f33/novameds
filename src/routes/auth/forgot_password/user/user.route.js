import express from "express";
import UserForgotPasswordCtrl from
"../../../../controllers/auth/forgot_password/user/user_get.controller.js";

import UserForgotPasswordCtrlPost from
"../../../../controllers/auth/forgot_password/user/user_post.controller.js"

import UserResetPasswordCtrl from
"../../../../controllers/auth/reset_password/reset_get.controller.js";

import UserResetPasswordCtrlPost from
"../../../../controllers/auth/reset_password/reset_post.controller.js";

const router = express.Router();

router.get( "/user/forgot", UserForgotPasswordCtrl);
router.post( "/user/forgot", UserForgotPasswordCtrlPost );

router.get( "/user/reset/:token", UserResetPasswordCtrl );
router.post( "/user/reset/:token", UserResetPasswordCtrlPost );

export default router;
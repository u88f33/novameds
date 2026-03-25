import express from "express";
import LoginGetCtrl from "../../controllers/auth/login/login_get.controller.js"
import UserLoginPostCtrl from "../../controllers/auth/login/user/login_post.controller.js"
import AdminLoginPostCtrl from "../../controllers/auth/login/admin/login_post.controller.js"
const router = express.Router();


router.get( "/login", LoginGetCtrl );
router.post( "/user-login", UserLoginPostCtrl );
router.post( "/admin-login", AdminLoginPostCtrl );

export default router;
import express from "express";
import LoginGetCtrl from "../../controllers/auth/login/login_get.controller.js"
import LoginPostCtrl from "../../controllers/auth/login/login_post.controller.js"
const router = express.Router();


router.get( "/login", LoginGetCtrl );
router.post( "/login", LoginPostCtrl );

export default router;
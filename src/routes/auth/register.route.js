import express from "express";
import RegisterGetCtrl from "../../controllers/auth/register/register_get.controller.js"
import RegisterPostCtrl  from "../../controllers/auth/register/register_post.controller.js"
import RegisterAdminCtrl from "../../controllers/auth/register/admin/register_get.controller.js"
const router = express.Router();


router.get( "/register", RegisterGetCtrl );
router.post( "/user-register", RegisterPostCtrl );

router.get( "/admin-register", RegisterAdminCtrl );

export default router;
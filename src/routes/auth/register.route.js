import express from "express";
import RegisterGetCtrl from "../../controllers/auth/register/register_get.controller.js"
import RegisterPostCtrl  from "../../controllers/auth/register/register_post.controller.js"
const router = express.Router();


router.get( "/register", RegisterGetCtrl );
router.post( "/user-register", RegisterPostCtrl );

export default router;
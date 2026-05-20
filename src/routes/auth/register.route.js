import express from "express";
import { body } from "express-validator";
import RegisterGetCtrl from "../../controllers/auth/register/register_get.controller.js"
import RegisterPostCtrl  from "../../controllers/auth/register/register_post.controller.js"
import RegisterAdminCtrl from "../../controllers/auth/register/admin/register_get.controller.js"

const router = express.Router();

let validateRegistration = [
    body("user_name")
    .trim()
    .notEmpty()
    .withMessage( "Name is required" )
    .isLength({ min: 3 })
    .withMessage("Full name must be at least 3 characters"),
]

router.get( "/register", RegisterGetCtrl );


router.post( 
    "/user-register",
    validateRegistration, 
    RegisterPostCtrl
);

router.get( "/admin-register", RegisterAdminCtrl );

export default router;
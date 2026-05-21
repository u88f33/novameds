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
    .escape()
    .isLength({ min: 3, max: 40 })
    .withMessage( "Minimum 3 and maximum 40 characters are allowed" )
    .matches(/^[A-Za-z\s]+$/)
    .withMessage( "Only Alphabets and Spaces are allowed" )
    .customSanitizer( customerName => {
        return customerName
        .toLowerCase()
        .split(" ")
        .map( word => word.charAt(0).toUpperCase() + word.slice(1) )
        .join(" ");
    } )
]

router.get( "/register", RegisterGetCtrl );


router.post( 
    "/user-register",
    validateRegistration, 
    RegisterPostCtrl
);

router.get( "/admin-register", RegisterAdminCtrl );

export default router;
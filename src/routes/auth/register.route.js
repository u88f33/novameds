import express from "express";
import { body } from "express-validator";
import RegisterGetCtrl from "../../controllers/auth/register/register_get.controller.js"
import RegisterPostCtrl  from "../../controllers/auth/register/register_post.controller.js"
import RegisterAdminCtrl from "../../controllers/auth/register/admin/register_get.controller.js"

const router = express.Router();

let validateRegistration = [

    // Customer name validation
    // Error messages are displaying on "register.ejs"
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
    } ),


    body( "user_email" )
    .trim()
    .escape()
    .isLength({ max: 60 })
    .withMessage( "Maximum 60 characters are allowed" )
    .notEmpty()
    .withMessage( "Email is required" )
    .isEmail()
    .withMessage("Not a valid Email address")
    .normalizeEmail()
]

router.get( "/register", RegisterGetCtrl );


router.post( 
    "/user-register",
    validateRegistration, 
    RegisterPostCtrl
);

router.get( "/admin-register", RegisterAdminCtrl );

export default router;
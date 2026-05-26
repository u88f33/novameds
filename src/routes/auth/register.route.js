import express from "express";
import { body } from "express-validator";
import RegisterGetCtrl from "../../controllers/auth/register/register_get.controller.js"
import RegisterPostCtrl  from "../../controllers/auth/register/register_post.controller.js"
import RegisterAdminCtrl from "../../controllers/auth/register/admin/register_get.controller.js"
import userCitiesList from "../../utils/userCityInfo/citiesList.js";

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


    // Validating Customer Email
    body( "user_email" )
    .trim()
    .notEmpty()
    .withMessage( "Email is required" )
    .escape()
    .isLength({ max: 60 })
    .withMessage( "Maximum 60 characters are allowed" )
    .isEmail()
    .withMessage("Not a valid Email address")
    .normalizeEmail(),


    // Validating Customer Mobile Phone
    body( "user_phone" )
    .trim()
    .notEmpty()
    .withMessage( "Phone number is required" )
    .matches(/^\+?(92\d{10}|^03\d{9})/)
    .withMessage( "Not a valid Phone number" ),

    // Validating Customer Password
    body( "user_password" )
    .notEmpty()
    .withMessage( "Password is required" )
    .isLength({ min: 8, max: 40 })
    .withMessage( "Password must be between 8 to 40 characters" )
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/)
    .withMessage("Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character"),

    // Validating Customer Address
    body( "user_address" )
    .trim()
    .notEmpty()
    .withMessage( "Address is required" )
    .isLength({ min: 10, max: 200 })
    .withMessage("Address must be between 10 and 200 characters")
    .matches(/^[A-Za-z0-9\s,./#\-()]+$/)
    .withMessage("Not valid Address"),

    body( "user_city" )
    .trim()
    .escape()
    .isIn(userCitiesList())
    .withMessage( "Invalid City Name" ),

    body( "user_country" )
    .trim()
    .equals("Pakistan")
    .withMessage( "Invalid Country name" )

]

router.get( 
    "/register", 
    RegisterGetCtrl 
);

router.post( 
    "/user-register",
    validateRegistration, 
    RegisterPostCtrl
);

router.get( 
    "/admin-register", 
    RegisterAdminCtrl 
);

export default router;
import express from "express";
import { body } from "express-validator";
import UpdateSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/update/update_get.controller.js"

import UpdateSupplierRecordsCtrlPost
from "../../../../controllers/admin/manage/suppliers/update/update_post.controller.js"


const router = express.Router();

const validateData = [

    // Validating Supplier Name
    body("supplier_name")
    .trim()
    .notEmpty()
    .withMessage( "Supplier name is required" )
    .escape()
    .isLength({ min: 3, max: 40 })
    .withMessage( "Minimum 3 and maximum 40 characters are allowed" )
    .matches(/^[A-Za-z0-9\s]+$/)
    .withMessage( "Only Alphabets and Spaces are allowed" ),

    // Validating Supplier Email
    body( "supplier_email" )
    .trim()
    .notEmpty()
    .withMessage( "Email is required" )
    .escape()
    .isLength({ max: 60 })
    .withMessage( "Maximum 60 characters are allowed" )
    .isEmail()
    .withMessage("Not a valid Email address")
    .normalizeEmail(),

    // Validating Supplier Phone number
    body("supplier_phone")
    .trim()
    .notEmpty().withMessage("Phone is required")
    .matches(/^(03\d{9}|0\d{2,3}\d{7})$/).withMessage("Invalid phone number"),

    // Validating Supplier Address
    body( "supplier_address" )
    .trim()
    .notEmpty()
    .withMessage( "Address is required" )
    .isLength({ min: 10, max: 200 })
    .withMessage("Address must be between 10 and 200 characters")
    .matches(/^[A-Za-z0-9\s,./#\-\(\)\\]+$/)
    .withMessage("Not valid Address"),
];

router.get( 
    "/:id", 
    UpdateSupplierRecordsCtrl 
);

router.post( 
    "/:id", 
    validateData,
    UpdateSupplierRecordsCtrlPost 
);

export default router;
import express from "express";
import { body } from "express-validator";
import AddSupplierRecordsCtrl
from "../../../../controllers/admin/manage/suppliers/add/add_get.controller.js";

import AddSupplierRecordsCtrlPost
from "../../../../controllers/admin/manage/suppliers/add/add_post.controller.js";


const router = express.Router();

router.get( "/", AddSupplierRecordsCtrl );

router.post( 
    "/",
    /**
     * Here i have used the body("field_name") function of "express-validator"
     * 1) Trim the phone number from left and right
     * 2) If a Phone number field "supplier_phone" is empty, a message 
     *    "Phone is required" appears on screen.
     * 3) matches(regex) function match the contact number with Pakistan phone
     *    number.
     */
    [
        body("supplier_phone")
            .trim()
            .notEmpty().withMessage("Phone is required")
            .matches(/^(03\d{9}|0\d{2,3}\d{7})$/).withMessage("Invalid phone number")
    ],
    AddSupplierRecordsCtrlPost
);

export default router;
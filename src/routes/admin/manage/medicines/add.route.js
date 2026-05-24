import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { body } from "express-validator";
import SuppliersCollection from "../../../../models/suppliers.model.js";
import AddMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/add/add_get.controller.js"

import AddMedicineRecortCtrlPost
from "../../../../controllers/admin/manage/medicines/add/add_post.controller.js"

const router = express.Router();

let medicineImageUploadPath = './public/uploads/medicines';

/**
 * Validating Medicine records using "express-validator"
*/

const valideteMedicineRecord = [
  body("medicine_name")
  .trim()
  .notEmpty()
  .withMessage( "Medicine name is required" )
  .escape()
  .matches(/^[A-Za-z0-9., ]+$/i)
  .withMessage("Invalid characters found in Medicine Name"),

  body("medicine_category")
  .trim()
  .notEmpty()
  .withMessage( "Medicine Category is required" )
  .escape()
  .matches(/^[A-Za-z., ]+$/i)
  .withMessage("Only Alphabets and Spaces are allowed"),

  body("medicine_price")
  .trim()
  .notEmpty()
  .withMessage( "Medicine price is required" )
  .escape()
  .matches(/^[0-9.]+$/i)
  .withMessage("Only digits are allowed")
  .isFloat({ min: 1, max: 5000000000 })
  .withMessage("Price must be Decimal number"),

  body("medicine_stock")
  .trim()
  .notEmpty()
  .withMessage( "Medicine stock is required" )
  .escape()
  .matches(/^[0-9]+$/i)
  .withMessage("Only digits are allowed")
  .isInt( { min: 1, max: 500000000 } )
  .withMessage( "Stock Quantity must be integer" ),
];



/**
 * Program for uploading file using "Multer" package
*/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    // Check whether the medicines folder in uploads folder exists.
    // If not, then create it
    if ( !fs.existsSync( medicineImageUploadPath ) ) {
      fs.mkdirSync( medicineImageUploadPath );
    }

    cb(null, medicineImageUploadPath)
  },
  filename: function (req, file, cb) {
    const uniqueMedicineName = 
    Date.now() + '-' + file.originalname.slice( 0, file.originalname.indexOf('.') ) +
    path.extname( file.originalname );
    
    cb( null, uniqueMedicineName );
  }
});

const limits = {
    fileSize: 200 * 1024
}

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer(
    { 
        storage,
        limits,
        fileFilter
    }
);

router.get( "/", AddMedicineRecordCtrl );

router.post( 
    "/", 
    upload.single( "medicine_image" ),
    valideteMedicineRecord,
    AddMedicineRecortCtrlPost 
);

export default router;
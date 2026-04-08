import express from "express";
import multer from "multer";
import path from "path";
import UpdateMedicineRecordCtrl 
from "../../../../controllers/admin/manage/medicines/update/update_get.controller.js";

import UpdateMedicineRecordCtrlPost
from "../../../../controllers/admin/manage/medicines/update/update_post.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/medicines')
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


router.get( "/:id", UpdateMedicineRecordCtrl );


router.post( 
    "/:id",
    upload.single( "medicine_image" ),
    UpdateMedicineRecordCtrlPost 
);

export default router;
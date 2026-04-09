import express from "express";

import searchMedicineRecordCtrl 
from "../../controllers/home/search.controller.js";

/**
 * API route for searching medicine by user on Home page and Profile page
 * after successfull Login.
 * 
 * Route for Searching Medicines on Home Page by User.
 */

const router = express.Router();

router.get( "/", searchMedicineRecordCtrl );

export default router;
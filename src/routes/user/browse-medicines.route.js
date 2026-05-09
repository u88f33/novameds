import express from "express";
import BrowseMedicinesByLoggedInUserCtrl from 
"../../controllers/user/browse-medicines.controller.js";

const router = express.Router();

router.get( "/medicines", BrowseMedicinesByLoggedInUserCtrl );

export default router;
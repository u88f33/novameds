import express from "express";
import BrowseMedicinesByGuestCtrl from "../../controllers/home/browse-medicines.controller.js";
const router = express.Router();

router.get( "/medicines", BrowseMedicinesByGuestCtrl )

export default router;
import express from "express";
import HomePageRoute from "./home.route.js";
import HomeSearchMedicineByUser from "./search.route.js";
import BrowseMedicinesByGuestRoute from "./browse-medicines.route.js";

const router = express.Router();

router.use( "/", HomePageRoute );

router.use( "/browse", BrowseMedicinesByGuestRoute );

/* Medicines API for searching medicines on Home page and Profile page */
router.use( "/user/api/medicines", HomeSearchMedicineByUser );


export default router;
import express from "express";
import HomePageRoute from "./home.route.js";
import HomeSearchMedicineByUser from "./search.route.js";

const router = express.Router();

router.use( "/", HomePageRoute );
router.use( "/user/api/medicines", HomeSearchMedicineByUser );

export default router;
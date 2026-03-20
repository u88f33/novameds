import express from "express"
import HomePageCtrl from "../../controllers/home/home.controller.js";
const router = express.Router();

router.get( "/", HomePageCtrl );

export default router;
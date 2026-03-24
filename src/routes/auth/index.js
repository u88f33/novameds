import express from "express";
import LoginRoute from "./login.route.js";


const router = express.Router();



router.use( "/", LoginRoute );




export default router;
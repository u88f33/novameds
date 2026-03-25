import express from "express";
import LoginRoute from "./login.route.js";
import RegisterRoute from "./register.route.js"

const router = express.Router();


router.use( "/", LoginRoute );
router.use( "/", RegisterRoute );


export default router;
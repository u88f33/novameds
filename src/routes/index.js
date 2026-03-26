import express from "express";
import HomeRoute from "./home/home.route.js";
import AuthRoute from "./auth/index.js";
import AdminRoute from "./admin/index.js"
const router = express.Router();

router.use( "/", HomeRoute );
router.use( "/", AuthRoute );
router.use( "/", AdminRoute );

export default router;


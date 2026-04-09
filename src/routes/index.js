import express from "express";
import HomeRoute from "./home/index.js";
import AuthRoute from "./auth/index.js";
import AdminRoute from "./admin/index.js"
import UserRoute from "./user/index.js"
const router = express.Router();

router.use( "/", HomeRoute );
router.use( "/", AuthRoute );
router.use( "/", AdminRoute );
router.use( "/", UserRoute )

export default router;


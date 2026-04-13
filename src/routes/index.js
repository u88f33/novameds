import express from "express";
import HomeRoute from "./home/index.js";
import AuthRoute from "./auth/index.js";
import AdminRoute from "./admin/index.js"
import UserRoute from "./user/index.js"
import UserLoginMiddleware from "../middlewares/user/login.js"
const router = express.Router();

router.use( "/", HomeRoute );
router.use( "/", AuthRoute );
router.use( "/", AdminRoute );
router.use( "/", UserLoginMiddleware, UserRoute )

export default router;


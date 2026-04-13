import express from "express";
import UserLogoutGetCtrl from "../../controllers/auth/logout/user/logout.controller.js";

const router = express.Router();

router.get( "/user/logout", UserLogoutGetCtrl );

export default router;
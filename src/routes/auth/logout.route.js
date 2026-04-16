import express from "express";
import UserLogoutGetCtrl from "../../controllers/auth/logout/user/logout.controller.js";
import AdminLogoutGetCtrl from "../../controllers/auth/logout/admin/logout.controller.js";

const router = express.Router();

router.get( "/user/logout", UserLogoutGetCtrl );
router.get( "/admin/logout", AdminLogoutGetCtrl );

export default router;
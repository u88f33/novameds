import express from "express";
import UserProfileCtrl from "../../controllers/user/profile.controller.js"
const router = express.Router();

router.get( "/", UserProfileCtrl );

export default router;
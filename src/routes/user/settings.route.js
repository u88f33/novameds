import express from "express";
import SettingsPageCtrl from "../../controllers/user/settings/settings.controller.js";
import ProfilePageSettingCtrlPost from "../../controllers/user/settings/profile_setting.controller.js";
import ProfilePasswordChangeCtrlPost from "../../controllers/user/settings/password_change.controller.js";
const router = express.Router();

router.get( "/:id", SettingsPageCtrl );
router.post( "/profile-settings/:id",  ProfilePageSettingCtrlPost );
router.post( "/change-password/:id",  ProfilePasswordChangeCtrlPost );

export default router;
import express from "express";
import SettingsPageCtrl from "../../controllers/user/settings/settings.controller.js";
import SettingsPageProfileSettingCtrl from "../../controllers/user/settings/profile_setting.controller.js";
import SettingsPagePasswordChangeCtrlCtrl from "../../controllers/user/settings/password_change.controller.js";
const router = express.Router();

router.get( "/", SettingsPageCtrl );
router.post( "/profile-settings",  SettingsPageProfileSettingCtrl );
router.post( "/change-password",  SettingsPagePasswordChangeCtrlCtrl );

export default router;
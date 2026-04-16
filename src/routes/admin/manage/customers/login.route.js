import express from "express";
import UserAccountLoggedInByAdminCtrl 
from "../../../../controllers/admin/manage/customers/login.controller.js"

const router = express.Router();

router.get( "/:id", UserAccountLoggedInByAdminCtrl );

export default router;
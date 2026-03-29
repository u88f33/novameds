import express from "express";
import AdminMainCtrl from "../../../controllers/admin/main/main.controller.js"
const router = express.Router();

router.get( "/", AdminMainCtrl );

export default router;
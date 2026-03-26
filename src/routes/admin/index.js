import express from "express";
import AdminMainRoute from "./main/main.route.js";

const router = express.Router();

router.use( "/", AdminMainRoute);

export default router;
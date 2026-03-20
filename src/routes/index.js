import express from "express"
import HomeRoute from "./home/home.route.js"
const router = express.Router();

router.get( "/", HomeRoute );

export default router;


import express from "express";
import ManageMedicinesRoute from "./manage.route.js";
import AddMedicinesRoute from "./add.route.js";

const router = express.Router();

router.use( "/manage/medicines", ManageMedicinesRoute );
router.use( "/manage/medicines/add", AddMedicinesRoute );


export default router;
import express from "express";
import AddMedicinesCtrl 
from "../../../../controllers/admin/manage/medicines/add.controller.js"

const router = express.Router();

router.get( "/", AddMedicinesCtrl );

export default router;
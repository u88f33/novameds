import express from "express";
import ManageMedicinesCtrl 
from "../../../../controllers/admin/manage/medicines/manage.controller.js"

const router = express.Router();

router.get( "/", ManageMedicinesCtrl );

export default router;
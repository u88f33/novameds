import express from "express";
import ManageMedicinesRoute from "./manage.route.js";
import AddMedicinesRoute from "./add.route.js";
import ViewMedicinesRoute from "./view.route.js";
import UpdateMedicinesRoute from "./update.route.js";
import DeleteMedicinesRoute from "./delete.route.js";
import SearchMedicineRecordApi from "./search.route.js";
import StockAvailabilityReportRoute from "./stockAvailability.route.js";
import { MulterError } from "multer";

const router = express.Router();

router.use( "/manage/medicines", ManageMedicinesRoute );
router.use( "/manage/medicines/add", AddMedicinesRoute );
router.use( "/manage/medicines/view", ViewMedicinesRoute );
router.use( "/manage/medicines/update", UpdateMedicinesRoute );
router.use( "/manage/medicines/delete", DeleteMedicinesRoute );
router.use( "/api/medicines", SearchMedicineRecordApi );

router.use( 
    "/manage/medicines/stock/report/pdf",
    StockAvailabilityReportRoute
);

export default router;
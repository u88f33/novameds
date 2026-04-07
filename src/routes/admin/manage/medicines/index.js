import express from "express";
import ManageMedicinesRoute from "./manage.route.js";
import AddMedicinesRoute from "./add.route.js";
import ViewMedicinesRoute from "./view.route.js";
import UpdateMedicinesRoute from "./update.route.js";
import DeleteMedicinesRoute from "./delete.route.js";
import { MulterError } from "multer";

const router = express.Router();

router.use( "/manage/medicines", ManageMedicinesRoute );
router.use( "/manage/medicines/add", AddMedicinesRoute );
router.use( "/manage/medicines/view", ViewMedicinesRoute );
router.use( "/manage/medicines/update", UpdateMedicinesRoute );
router.use( "/manage/medicines/delete", DeleteMedicinesRoute );

export default router;
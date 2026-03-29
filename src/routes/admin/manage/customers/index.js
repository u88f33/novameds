import express from "express";
import ManageCustomerRecordsRoute from "./manage.route.js";
import AddCustomerRecordRoute from "./add.route.js";
import ViewCustomerRecordRoute from "./view.route.js";
import UpdateCustomerRecordRoute from "./update.route.js"
import DeleteCustomerRecordRoute from "./delete.route.js"

const router = express.Router();

router.use( "/manage/customers", ManageCustomerRecordsRoute );
router.use( "/manage/customers/add", AddCustomerRecordRoute );
router.use( "/manage/customers/view", ViewCustomerRecordRoute );
router.use( "/manage/customers/update", UpdateCustomerRecordRoute );
router.use( "/manage/customers/delete", DeleteCustomerRecordRoute );

export default router;
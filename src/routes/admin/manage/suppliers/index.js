import express from "express";
import ManageSupplierRecordRoute from "./manage.route.js";
import AddSupplierRecordRoute from "./add.route.js";
import ViewSupplierRecordRoute from "./view.route.js";
import UpdateSupplierRecordRoute from "./update.route.js"
import DeleteSupplierRecordRoute from "./delete.route.js"
import SuppliersSearchRecordsAPI from "./search.route.js";

const router = express.Router();

router.use( "/manage/suppliers", ManageSupplierRecordRoute );
router.use( "/manage/suppliers/add", AddSupplierRecordRoute );
router.use( "/manage/suppliers/view", ViewSupplierRecordRoute );
router.use( "/manage/suppliers/update", UpdateSupplierRecordRoute );
router.use( "/manage/suppliers/delete", DeleteSupplierRecordRoute );
router.use( "/api/suppliers", SuppliersSearchRecordsAPI );

export default router;
import express from "express";
import ManageOrdersRoute from "./manage.route.js";
import AddOrdersRoute from "./add.route.js";
import ViewOrdersRoute from "./view.route.js";
import UpdateOrderRoute from "./update.route.js";
import DeleteOrderRoute from "./delete.route.js";
import SearchOrderApiRoute from "./search.route.js";

const router = express.Router();

router.use( "/manage/orders", ManageOrdersRoute );
router.use( "/manage/orders/add", AddOrdersRoute );
router.use( "/manage/orders/view", ViewOrdersRoute );
router.use( "/manage/orders/update", UpdateOrderRoute );
router.use( "/manage/orders/delete", DeleteOrderRoute );
router.use( "/api/orders", SearchOrderApiRoute );


export default router;
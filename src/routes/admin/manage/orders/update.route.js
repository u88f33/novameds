import express from "express";
import UpdatePaymentStatusCtrl from
"../../../../controllers/admin/manage/orders/update/payment_update.controller.js"

import UpdateOrderStatusCtrl from
"../../../../controllers/admin/manage/orders/update/order_update.controller.js";

const router = express.Router();

router.post( "/payment/status/:id", UpdatePaymentStatusCtrl );
router.post( "/order/status/:id", UpdateOrderStatusCtrl );

export default router;
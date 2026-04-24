import express from "express";
import SingleCustomerAddressCtrl from "../../controllers/apis/address.controller.js"
const router = express.Router();

router.get( "/api/customer/address/:id", SingleCustomerAddressCtrl );

export default router;
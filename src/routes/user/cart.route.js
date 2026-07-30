import express from "express";
import CartPageCtrl from "../../controllers/user/cart/cart.controller.js";
import CartItemAddCtrl from "../../controllers/user/cart/cart_post.controller.js";
import CartItemDeleteCtrl from "../../controllers/user/cart/cart_delete.controller.js";
import CartItemsApiCtrl from "../../controllers/user/cart/cart_api.controller.js";
import CheckoutPageCtrl from "../../controllers/user/cart/checkout/checkout.controller.js";
import CheckoutPageCtrlPost from "../../controllers/user/cart/checkout/checkout_post.controller.js";
import OrdersHistoryCtrl from "../../controllers/user/cart/orders_history.controller.js";
import InvoicePdfCtrl from "../../controllers/user/cart/invoice/invoice_pdf.controller.js";
import OrderConfirmationCtrl from "../../controllers/user/cart/order_confirmation.controller.js";
import paymentSuccessCtrl from "../../controllers/user/cart/payment/payment_success.controller.js"
import SaveAddressRedirectSafepay from "../../controllers/user/cart/checkout/card/safePayUserAddress/safepayUserAddress.controller.js"
import { body } from "express-validator";
import userCitiesList from "../../utils/userCityInfo/citiesList.js";

let requiredShippingUserInfo = [
    // Validating Customer Address
    body( "ship_address" )
    .trim()
    .notEmpty()
    .withMessage( "Shipping address is required" )
    .isLength({ min: 10, max: 200 })
    .withMessage("Shipping address must be between 10 and 200 characters")
    .matches(/^[A-Za-z0-9\s,./#\-()]+$/)
    .withMessage("Not valid Shipping address"),
    
    body( "ship_city" )
    .trim()
    .escape()
    .isIn(userCitiesList())
    .withMessage( "Invalid City Name" ),
    
    body( "ship_state" )
    .trim()
    .equals("Pakistan")
    .withMessage( "Invalid Country name" ),

    // Validating Customer Mobile Phone
    body( "ship_phone" )
    .trim()
    .notEmpty()
    .withMessage( "Phone number is required" )
    .matches(/^\+?(92\d{10}|^03\d{9})/)
    .withMessage( "Not a valid Phone number" )
];


const router = express.Router();

router.get( "/", CartPageCtrl );
router.post( "/add/:id", CartItemAddCtrl );
router.delete( "/delete/:id", CartItemDeleteCtrl );
router.get( "/api", CartItemsApiCtrl );

router.get( "/checkout", CheckoutPageCtrl );
router.get( "/checkout/paymentSuccessfull", paymentSuccessCtrl );
router.get( "/orders/history", OrdersHistoryCtrl );
router.get( "/order/confirm/:id", OrderConfirmationCtrl );


router.get( "/checkout/invoice/pdf/:id", InvoicePdfCtrl );

router.post( 
    "/checkout", 
    requiredShippingUserInfo,
    CheckoutPageCtrlPost
);

router.post(
    "/checkout/save/address/safepay",
    SaveAddressRedirectSafepay
)

export default router; 
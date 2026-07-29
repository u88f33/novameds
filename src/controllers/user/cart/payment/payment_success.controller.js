import medicineRecordsArray from "../../../../utils/medicines/records.js";
import MedicineCollection from "../../../../models/medicines.model.js";
import OrderCollection from "../../../../models/order.model.js";
import CartCollection from "../../../../models/cart.model.js";
import generateInvoice from "../../../../utils/invoice/pdfGenerator.js";
import { newOrder } from "../checkout/checkout.controller.js";

const paymentSuccessCtrl = async ( req, res, next ) => {

    try {
        res.render(
            "user/paymentSuccess",
            {
                customerOrder,
                medicineRecords,
                nameOfLoggedInUser: customerName,
                loggedInUserId: customerId
            }
        )
    } catch ( err ) {
        console.log( "Error in /controllers/user/cart/payment/payment_success.controller.js" );
        console.log( "-------------------------------------------" );
        console.log( err );
        console.log( "-------------------------------------------" );
    }

}

export default paymentSuccessCtrl;
import medicineRecordsArray from "../../../../utils/medicines/records.js";
import MedicineCollection from "../../../../models/medicines.model.js";
import OrderCollection from "../../../../models/order.model.js";
import CartCollection from "../../../../models/cart.model.js";
import generateInvoice from "../../../../utils/invoice/pdfGenerator.js";
import { newOrder } from "../../../user/cart/checkout/checkout.controller.js";
import { generateSafepayWebhook } from
"../../../../utils/safepay/safepay.js";

const WebhookBySafepayServer = async ( req, res, next ) => {
    try {

        const valid = await generateSafepayWebhook( req );
        const orderId = req.body.data.notification.metadata.order_id;

        

        if ( valid ) {
            console.log( "-------------------------------" )
            console.log( "Webhook" )
            console.log( "-------------------------------" )
            console.log( valid );
            console.log( "-------------------------------" )
        }

    } catch ( err ) {
        console.log( "Error in controllers/payments/safepay/webhook/webhook.controller.js" );
        console.log( `Error: ${ err }` );
        console.log( `Error Message: ${ err.message }` );
    }
}

export default WebhookBySafepayServer;
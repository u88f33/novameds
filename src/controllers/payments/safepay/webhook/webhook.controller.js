import OrderCollection from "../../../../models/order.model.js";
import { generateSafepayWebhook } from
"../../../../utils/safepay/safepay.js";

const WebhookBySafepayServer = async ( req, res, next ) => {
    try {

        const valid = await generateSafepayWebhook( req );
        const orderId = req.body.data.notification.metadata.order_id;

        if ( valid ) {
            const updatePaymentStatus = await OrderCollection.findByIdAndUpdate(
                orderId,
                { paymentStatus: "Paid" }
            )
        } else {
            const updatePaymentStatus = await OrderCollection.findByIdAndUpdate(
                orderId,
                { paymentStatus: "Unpaid" }
            )
        }

    } catch ( err ) {
        console.log( "Error in controllers/payments/safepay/webhook/webhook.controller.js" );
        console.log( `Error: ${ err }` );
        console.log( `Error Message: ${ err.message }` );
    }
}

export default WebhookBySafepayServer;
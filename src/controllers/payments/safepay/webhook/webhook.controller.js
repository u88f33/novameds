import OrdersCollection from "../../../../models/order.model.js";
import { generateSafepayWebhook } from
"../../../../utils/safepay/safepay.js";

const WebhookBySafepayServer = async ( req, res, next ) => {
    try {

        const valid = await generateSafepayWebhook( req );
        const orderId = req.body.data.notification.metadata.order_id;


        if ( valid ) {
            console.log( "req.body" );
            console.log( "------------------------------------------------" );
            console.log( orderId );
            console.log( "------------------------------------------------" );
        }

    } catch ( err ) {
        console.log( "Error in controllers/payments/safepay/webhook/webhook.controller.js" );
        console.log( `Error: ${ err }` );
        console.log( `Error Message: ${ err.message }` );
    }
}

export default WebhookBySafepayServer;
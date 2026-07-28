import OrdersCollection from "../../../../models/order.model.js";
import { generateSafepayWebhook } from
"../../../../utils/safepay/safepay.js";

const WebhookBySafepayServer = async ( req, res, next ) => {
    try {

        const valid = await generateSafepayWebhook( req );
        
        if ( valid ) {
            let customerOrder = await OrdersCollection.findById(
                req.body.data.notification.metadata.order_id
            );
            console.log( "req.body" );
            console.log( customerOrder );
            console.log( "------------------------------------------------" );
            console.log( "------------------------------------------------" );
        }

    } catch ( err ) {
        console.log( "Error in controllers/payments/safepay/webhook/webhook.controller.js" );
        console.log( `Error: ${ err }` );
        console.log( `Error Message: ${ err.message }` );
    }
}

export default WebhookBySafepayServer;
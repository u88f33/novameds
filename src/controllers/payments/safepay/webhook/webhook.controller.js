import { generateSafepayWebhook } from
"../../../../utils/safepay/safepay.js";

const WebhookBySafepayServer = async ( req, res, next ) => {
    try {

        const valid = await generateSafepayWebhook( req );

        console.log( "Webhook response by Safepay" )
        console.log( "------------------------------------------------------" );
        console.log( valid );
        console.log( "------------------------------------------------------" );

    } catch ( err ) {
        console.log( "Error in controllers/payments/safepay/webhook/webhook.controller.js" );
        console.log( `Error: ${ err }` );
        console.log( `Error Message: ${ err.message }` );
    }
}

export default WebhookBySafepayServer;
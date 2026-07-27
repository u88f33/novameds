import generateSafepayWebhook from
"../../../../utils/safepay/safepay.js";

const WebhookBySafepayServer = async ( req, res, next ) => {
    const valid = await generateSafepayWebhook( req );

    console.log( "Webhook response by Safepay" )
    console.log( "------------------------------------------------------" );
    console.log( valid );
    console.log( "------------------------------------------------------" );
}

export default WebhookBySafepayServer;
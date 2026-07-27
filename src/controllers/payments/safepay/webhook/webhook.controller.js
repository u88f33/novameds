const WebhookBySafepayServer = async ( req, res, next ) => {
    const valid = await safepay.verify.webhook( req );

    console.log( valid );
}

export default WebhookBySafepayServer;
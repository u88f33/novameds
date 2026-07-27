const WebhookBySafepayServer = async ( req, res, next ) => {
    const valid = await safepay.verify.webhook( req );

    
}

export default WebhookBySafepayServer;
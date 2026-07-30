const saveAddressRedirectSafepay = async ( req, res, next ) => {
    
    try {

        const {
            shippingAddress,
            permanentAddress
        } = req.body;

        req.session.shippingAddress = shippingAddress;
        req.session.permanentAddress = permanentAddress;

        res.json( {
            safepayUrl: req.session.safepayUrl
        } )

    } catch ( err ) {
        res.status( 500 ).json({
            "Message": "Error on Server-Side",
            "Error": err
        })
    }

}

export default saveAddressRedirectSafepay;
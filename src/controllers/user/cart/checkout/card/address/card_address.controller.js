const CheckoutCardAddressPost = ( req, res, next ) => {
    res.json( {
        message: "Data sent while Card payment",
        data: req.body
    } );
}

export default CheckoutCardAddressPost;
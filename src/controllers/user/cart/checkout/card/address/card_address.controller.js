const CheckoutCardAddressPost = ( req, res, next ) => {
    console.log( "CheckoutCardAddressPost" )
    console.log( "----------------------------------------" );
    res.json( req.body );
    console.log( "----------------------------------------" );
}

export default CheckoutCardAddressPost;
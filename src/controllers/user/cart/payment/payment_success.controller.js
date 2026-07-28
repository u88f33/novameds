const paymentSuccessCtrl = ( req, res, next ) => {
    console.log( "Run this command" );
    
    res.render(
        "user/paymentSuccess"
    )
}

export default paymentSuccessCtrl;
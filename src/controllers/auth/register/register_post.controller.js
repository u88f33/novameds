const RegisterPostCtrl = ( req, res, next ) => {
    console.log( "-------------------------" );
    console.log( "Registration" );
    console.log( "-------------------------" );
    console.log( req.body );
    console.log( "-------------------------" );
    res.redirect( "/register" );
}

export default RegisterPostCtrl;
const LoginPostCtrl = ( req, res, next ) => {
    console.log( "Login Post" );
    console.log( req.body );
    next();
}

export default LoginPostCtrl;
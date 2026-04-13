const UserLoginMiddleware = ( req, res, next ) => {
    if ( req.session.userLoginSession ) {
        next();
    } else {
        res.redirect( "/login" );
    }
}

export default UserLoginMiddleware;
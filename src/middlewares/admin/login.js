const AdminLoginMiddleware = ( req, res, next ) => {
    if ( req.session.adminLoginSession ) {
        next();
    } else {
        res.redirect( "/login" );
    }
}

export default AdminLoginMiddleware;
const AdminLogoutGetCtrl = ( req, res, next ) => {

    res.clearCookie( "adminToken", {
        httpOnly: true,
        secure: false
    });
    
    res.redirect( "/login" );

}

export default AdminLogoutGetCtrl;
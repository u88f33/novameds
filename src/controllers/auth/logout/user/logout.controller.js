const UserLogoutGetCtrl = ( req, res, next ) => {

    res.clearCookie( "userToken", {
        httpOnly: true
    });
    
    res.redirect( "/login" );

}

export default UserLogoutGetCtrl;
const UserLogoutGetCtrl = ( req, res, next ) => {

    res.clearCookie( "userToken", {
        httpOnly: true,
        secure: false
    });
    
    res.redirect( "/login" );

}

export default UserLogoutGetCtrl;
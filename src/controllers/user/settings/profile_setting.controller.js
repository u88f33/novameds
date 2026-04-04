const SettingPageProfileSettingCtrl = ( req, res, next ) => {
    console.log( "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" );
    console.log( "User Profile Settings" );
    console.log( "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" );
    console.log( req.body );
    console.log( "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" );
    res.redirect( "/profile/settings" );
}

export default SettingPageProfileSettingCtrl;
const SettingsPagePasswordChangeCtrlCtrl = ( req, res, next ) => {
    console.log( ":::::::::::::::::::::::::::::::::::::::::::::" );
    console.log( "User Password Change" );
    console.log( ":::::::::::::::::::::::::::::::::::::::::::::" );
    console.log( req.body );
    console.log( ":::::::::::::::::::::::::::::::::::::::::::::" );
    res.redirect( "/profile/settings" )
}

export default SettingsPagePasswordChangeCtrlCtrl;
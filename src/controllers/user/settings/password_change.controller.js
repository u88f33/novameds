const ProfilePasswordChangeCtrlPost = ( req, res, next ) => {
    console.log( ":::::::::::::::::::::::::::::::::::::::::::::" );
    console.log( "User Password Change" );
    console.log( ":::::::::::::::::::::::::::::::::::::::::::::" );
    console.log( req.body );
    console.log( ":::::::::::::::::::::::::::::::::::::::::::::" );
    
    req.session.destroy( () => {
        res.redirect( "/login" );
    } )
}

export default ProfilePasswordChangeCtrlPost;
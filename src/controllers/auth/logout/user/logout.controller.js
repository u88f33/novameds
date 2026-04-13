const UserLogoutGetCtrl = ( req, res, next ) => {
    req.session.destroy(( error ) => {
        if ( error ) {
            console.log( `Unable to destroy Session` );
            console.log( `Error: ${ error }` );
        }
        res.redirect( "/login" );
    })
}

export default UserLogoutGetCtrl;
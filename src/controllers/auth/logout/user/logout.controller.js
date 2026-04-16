const UserLogoutGetCtrl = ( req, res, next ) => {

    if ( req.session.adminLoginSession ) {
        res.redirect( "/admin/manage/customers" );
        return;
    }

    req.session.destroy(( error ) => {
        if ( error ) {
            console.log( `Unable to destroy Session` );
            console.log( `Error: ${ error }` );
        }
        res.redirect( "/login" );
    })
}

export default UserLogoutGetCtrl;
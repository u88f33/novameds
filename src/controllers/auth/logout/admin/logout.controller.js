const AdminLogoutGetCtrl = ( req, res, next ) => {
    req.session.destroy(( error ) => {
        if ( error ) {
            console.log( `Unable to destroy Session` );
            console.log( `Error: ${ error }` );
        }
    })
}

export default AdminLogoutGetCtrl;
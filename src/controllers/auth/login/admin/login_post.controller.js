const AdminLoginPostCtrl = ( req, res, next ) => {
    console.log( "---------------------------------" );
    console.log( "Admin Login" );
    console.log( "---------------------------------" );
    console.log( req.body );
    console.log( "---------------------------------" );
    res.redirect('/login');
}

export default AdminLoginPostCtrl;
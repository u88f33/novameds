const UserLoginPostCtrl = ( req, res, next ) => {
    console.log( "---------------------------------" );
    console.log( "User Login" );
    console.log( "---------------------------------" );
    console.log( req.body );
    console.log( "---------------------------------" );
    
   res.redirect('/login');
}

export default UserLoginPostCtrl;
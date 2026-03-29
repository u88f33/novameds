const DeleteCustomerRecordCtrl = ( req, res, next ) => {
    console.log( "-----------------------------" );
    console.log( `Delete Customer Parameter: ${req.params.id}` );
    console.log( "-----------------------------" );
    res.redirect( "/admin" )
}

export default DeleteCustomerRecordCtrl;
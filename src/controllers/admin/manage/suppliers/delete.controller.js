const DeleteSupplierRecordCtrl = ( req, res, next ) => {
    console.log( `--------------------------------------` );
    console.log( `Delete Supplier parameter: ${req.params.id}` );
    console.log( `--------------------------------------` );
    res.redirect( "/admin" );
}

export default DeleteSupplierRecordCtrl;
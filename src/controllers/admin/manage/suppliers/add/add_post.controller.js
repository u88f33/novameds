const AddSupplierRecordsCtrlPost = ( req, res, next ) => {
    console.log( "******************************************" );
    console.log( "New Supplier Record Added" );
    console.log( "******************************************" );
    console.log( req.body );
    console.log( "******************************************" );
    res.redirect( "/admin/manage/suppliers/add" );
}

export default AddSupplierRecordsCtrlPost;
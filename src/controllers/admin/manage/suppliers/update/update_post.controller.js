const UpdateSupplierRecordsCtrlPost = ( req, res, next ) => {
    console.log( "******************************************" );
    console.log( "Supplier Record Updated" );
    console.log( "******************************************" );
    console.log( req.body );
    console.log( "******************************************" );
    res.redirect( "/admin/manage/suppliers" );
}

export default UpdateSupplierRecordsCtrlPost;
const UpdateCustomerRecordCtrlPost = ( req, res, next ) => {
    console.log( "++++++++++++++++++++++++++++++++" );
    console.log( "Customer Record Updated" );    
    console.log( "++++++++++++++++++++++++++++++++" );
    console.log( req.body );
    console.log( "++++++++++++++++++++++++++++++++" );
    res.redirect( "/admin/manage/customers" );
}

export default UpdateCustomerRecordCtrlPost;
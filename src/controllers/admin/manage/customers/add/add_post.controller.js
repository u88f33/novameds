const AddCustomerRecordCtrlPost = ( req, res, next ) => {
    console.log( "++++++++++++++++++++++++++++++++" );
    console.log( "New Customer Record Added" );    
    console.log( "++++++++++++++++++++++++++++++++" );
    console.log( req.body );
    console.log( "++++++++++++++++++++++++++++++++" );
    res.redirect( "/admin/manage/customers/add" );
}

export default AddCustomerRecordCtrlPost;
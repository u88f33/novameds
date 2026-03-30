const AddMedicineRecortCtrlPost = ( req, res, next ) => {
    console.log( "------------------------------" );
    console.log( "Medicine Record Added" );
    console.log( "---------------------------------" );
    console.log( req.body );
    console.log( "--------------------------------" );
    res.redirect( "/admin/manage/medicines/add" );
}

export default AddMedicineRecortCtrlPost;
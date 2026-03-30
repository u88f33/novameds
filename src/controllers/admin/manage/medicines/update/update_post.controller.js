const UpdateMedicineRecordCtrlPost = ( req, res, next ) => {
    console.log( "----------------------------------------" );
    console.log( "Updated Medicine record" );
    console.log( "----------------------------------------" );
    console.log( req.body );
    console.log( "----------------------------------------" );
   res.redirect('/admin/manage/medicines/update/medicine_id_123');
}

export default UpdateMedicineRecordCtrlPost;
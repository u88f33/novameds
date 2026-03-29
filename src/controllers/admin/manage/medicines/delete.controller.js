const DeleteMedicineRecordCtrl = ( req, res, next ) => {
    console.log( `--------------------------------------` );
    console.log( `Delete Medicine parameter: ${req.params.id}` );
    console.log( `--------------------------------------` );
    res.redirect( "/admin" );
}

export default DeleteMedicineRecordCtrl;
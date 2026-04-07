import MedicinesCollection from "../../../../models/medicines.model.js";

const DeleteMedicineRecordCtrl = async ( req, res, next ) => {
    
    const deletedMedicineRecordFromDB = 
    await MedicinesCollection.findByIdAndDelete( req.params.id );

    if ( !deletedMedicineRecordFromDB ) {
        console.log( "Medicine Record not found" );
    }

    res.redirect( "/admin/manage/medicines" );
}

export default DeleteMedicineRecordCtrl;
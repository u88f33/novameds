import MedicinesCollection from "../../../../models/medicines.model.js";
import fs from "fs";
import path from "path";

const DeleteMedicineRecordCtrl = async ( req, res, next ) => {
    
    const deletedMedicineRecordFromDB = 
    await MedicinesCollection.findByIdAndDelete( req.params.id );

    fs.unlink( 
        path.join(
            process.cwd(), "public", "uploads", "medicines", deletedMedicineRecordFromDB.medicineImage
        ),
        err => {
            ( err )? console.log( `Error: ${err}` ) : console.log( `Image ${deletedMedicineRecordFromDB.medicineImage} deleted successfully` )
        }
    );

    if ( !deletedMedicineRecordFromDB ) {
        console.log( "Medicine Record not found" );
    }

    res.redirect( "/admin/manage/medicines" );
}

export default DeleteMedicineRecordCtrl;
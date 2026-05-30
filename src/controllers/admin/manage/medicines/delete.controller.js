import MedicinesCollection from "../../../../models/medicines.model.js";
import fs from "fs";
import path from "path";

const DeleteMedicineRecordCtrl = async ( req, res, next ) => {
    
    
    const totalMedicineRecordsInDb = await MedicinesCollection.countDocuments();
    
    /*
    * If database contains less than or equal to 20 records, than 
    * records cannot be deleted.
    */
   if ( totalMedicineRecordsInDb <= 20 ) {
       return res.redirect( 
           `/admin/manage/medicines/?message=This Demo Project must contains at least 20 records. Add more records to delete` 
        );
    }

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
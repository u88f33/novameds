import MedicinesCollection from "../../../../../models/medicines.model.js";
import fs from "fs";
import path from "path";

const UpdateMedicineRecordCtrlPost = async ( req, res, next ) => {
    
    const oldMedicineRecordInDB = await MedicinesCollection
    .findById( req.params.id );
    
    const {
        medicine_name,
        medicine_category,
        medicine_price,
        medicine_stock,
        supplier_id
    } = req.body;

    const updatedMedicineRecord = {
        medicineName: medicine_name,
        medicineCategory: medicine_category,
        medicinePrice: medicine_price,
        medicineStock: medicine_stock,
        supplierId: supplier_id,
        medicineImage: oldMedicineRecordInDB.medicineImage
    }

    if ( req.file ) {
        fs.unlink( 
            path.join(
                process.cwd(), "public", "uploads", "medicines", oldMedicineRecordInDB.medicineImage
            ),
            err => {
                ( err )? console.log( `Error: ${err}` ) : console.log( `Image ${oldMedicineRecordInDB.medicineImage} deleted successfully` )
            }
        );

        updatedMedicineRecord.medicineImage = req.file.filename;
    }



    const updatedMedicineRecordInDB = await MedicinesCollection
    .findByIdAndUpdate( 
        req.params.id, 
        updatedMedicineRecord,
        { returnDocument: "after" }
    );

    if ( !updatedMedicineRecordInDB ) {
        console.log( "Unable to update Medicine record in Database" );
    }

    console.log( "Medicine Record in Database updated successfully" );

    res.redirect( `/admin/manage/medicines/update/${req.params.id}` );
}

export default UpdateMedicineRecordCtrlPost;
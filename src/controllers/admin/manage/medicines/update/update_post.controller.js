import MedicinesCollection from "../../../../../models/medicines.model.js";
import SuppliersCollection from "../../../../../models/suppliers.model.js";
import fs from "fs";
import path from "path";
import { validationResult } from 'express-validator';

const UpdateMedicineRecordCtrlPost = async ( req, res, next ) => {
    
    let errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        req.session.medicineRecordsErrors = errors.errors;
        return res.redirect(`/admin/manage/medicines/update/${req.params.id}`);
    }

    const oldMedicineRecordInDB = await MedicinesCollection
    .findById( req.params.id );

    
    const {
        medicine_name,
        medicine_category,
        medicine_price,
        medicine_stock,
        supplier_id
    } = req.body;

    const supplierRecord = await SuppliersCollection.findById( supplier_id )

    const updatedMedicineRecord = {
        medicineName: medicine_name,
        medicineCategory: medicine_category,
        medicinePrice: medicine_price,
        medicineStock: medicine_stock,
        supplierId: supplier_id,
        supplierDetails: {
            supplierName: supplierRecord.supplierName,
            supplierEmail: supplierRecord.supplierEmail,
            supplierPhone: supplierRecord.supplierPhone,
            supplierAddress: supplierRecord.supplierAddress
        },
        medicineImage: oldMedicineRecordInDB.medicineImage
    }

    if ( req.file ) {
        if ( oldMedicineRecordInDB.medicineImage != "no-image.jpg" ) {
            fs.unlink( 
                path.join(
                    process.cwd(), "public", "uploads", "medicines", oldMedicineRecordInDB.medicineImage
                ),
                err => {
                    ( err )? console.log( `Error: ${err}` ) : console.log( `Image ${oldMedicineRecordInDB.medicineImage} deleted successfully` )
                }
            );
        }

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

    res.redirect( `/admin/manage/medicines/update/${req.params.id}/?message=Medicine record Updated successfully` );
}

export default UpdateMedicineRecordCtrlPost;
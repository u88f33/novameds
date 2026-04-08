import SuppliersCollection from "../../../../../models/suppliers.model.js";
import MedicinesCollection from "../../../../../models/medicines.model.js";


const UpdateMedicineRecordCtrl = async ( req, res, next ) => {

    const suppliersRecordsFromDB = await SuppliersCollection
    .find();

    const medicineRecordFromDB = await MedicinesCollection
    .findById( req.params.id )
    .populate("supplierId");

    console.log( medicineRecordFromDB );

    res.render(
        "admin/manage/medicines/update",
        {
            suppliersRecordsFromDB,
            medicineRecordFromDB
        }
    )
}

export default UpdateMedicineRecordCtrl;
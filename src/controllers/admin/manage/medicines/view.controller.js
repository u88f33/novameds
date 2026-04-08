import MedicinesCollection from "../../../../models/medicines.model.js";

const ViewMedicineRecordCtrl = async ( req, res, next ) => {

    const medicineRecordFromDB = 
    await MedicinesCollection
    .findById( req.params.id )
    .populate("supplierId")

    console.log( medicineRecordFromDB );

    res.render(
        "admin/manage/medicines/view",
        {
            medicineRecordFromDB
        }
    )
}

export default ViewMedicineRecordCtrl;
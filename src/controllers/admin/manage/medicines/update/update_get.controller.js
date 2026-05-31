import SuppliersCollection from "../../../../../models/suppliers.model.js";
import MedicinesCollection from "../../../../../models/medicines.model.js";


const UpdateMedicineRecordCtrl = async ( req, res, next ) => {

    const medicineRecordsErrors = req.session.medicineRecordsErrors || [];
    let message = req.query.message || "";

    const suppliersRecordsFromDB = await SuppliersCollection
    .find();

    const medicineRecordFromDB = await MedicinesCollection
    .findById( req.params.id )
    .populate("supplierId");

    // Clearing errors after storing in "medicineRecordsErros";
    req.session.medicineRecordsErrors = null;

    res.render(
        "admin/manage/medicines/update",
        {
            suppliersRecordsFromDB,
            medicineRecordsErrors,
            medicineRecordFromDB,
            message
        }
    )
}

export default UpdateMedicineRecordCtrl;
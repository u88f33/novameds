import SuppliersCollection from "../../../../../models/suppliers.model.js";
import MedicinesCollection from "../../../../../models/medicines.model.js";


const UpdateMedicineRecordCtrl = async ( req, res, next ) => {

    const medicineRecordsErrors = req.session.medicineRecordsErrors || [];

    const suppliersRecordsFromDB = await SuppliersCollection
    .find();

    const medicineRecordFromDB = await MedicinesCollection
    .findById( req.params.id )
    .populate("supplierId");

    res.render(
        "admin/manage/medicines/update",
        {
            suppliersRecordsFromDB,
            medicineRecordsErrors,
            medicineRecordFromDB
        }
    )
}

export default UpdateMedicineRecordCtrl;
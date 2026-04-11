import SuppliersCollection from "../../../models/suppliers.model.js";
import MedicinesCollection from "../../../models/medicines.model.js";

const AdminMainCtrl = async ( req, res, next ) => {
    
    const totalSupplierRecords = await SuppliersCollection.countDocuments();
    const totalMedicineRecords = await MedicinesCollection.countDocuments();

    res.render(
        "admin/main/main",
        {
            totalSupplierRecords,
            totalMedicineRecords
        }
    )
}

export default AdminMainCtrl;
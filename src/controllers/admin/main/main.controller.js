import SuppliersCollection from "../../../models/suppliers.model.js";
import MedicinesCollection from "../../../models/medicines.model.js";
import CustomersCollection from "../../../models/customers.model.js";

const AdminMainCtrl = async ( req, res, next ) => {
    
    const totalSupplierRecords = await SuppliersCollection.countDocuments();
    const totalMedicineRecords = await MedicinesCollection.countDocuments();
    const totalCustomerRecords = await CustomersCollection.countDocuments();

    res.render(
        "admin/main/main",
        {
            totalSupplierRecords,
            totalMedicineRecords,
            totalCustomerRecords
        }
    )
}

export default AdminMainCtrl;
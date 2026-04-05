import SuppliersCollection from "../../../models/suppliers.model.js";

const AdminMainCtrl = async ( req, res, next ) => {
    
    const totalSupplierRecords = await SuppliersCollection.countDocuments();

    res.render(
        "admin/main/main",
        {
            totalSupplierRecords
        }
    )
}

export default AdminMainCtrl;
import SuppliersCollection from "../../../../../models/suppliers.model.js";

const UpdateSupplierRecordsCtrl = async ( req, res, next ) => {
    const singleSupplierRecordInDB = 
    await SuppliersCollection.findById( req.params.id );


    res.render(
        "admin/manage/suppliers/update",
        {
            updatedSupplierRecord : {},
            singleSupplierRecordInDB
        }
    )
}

export default UpdateSupplierRecordsCtrl;
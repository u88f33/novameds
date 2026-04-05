import SuppliersCollection from "../../../../models/suppliers.model.js";

const ViewSupplierRecordsCtrl = async ( req, res, next ) => {

    const singleSupplierRecord = 
    await SuppliersCollection.findById( req.params.id );



    res.render(
        "admin/manage/suppliers/view",
        {
            singleSupplierRecord
        }
    );
}

export default ViewSupplierRecordsCtrl;
import CustomerCollection from "../../../../models/customers.model.js";

const ViewCustomerRecordCtrl = async ( req, res, next ) => {

    const singleCustomerRecord = await CustomerCollection.findById( req.params.id );

    res.render(
        "admin/manage/customers/view",
        {
            singleCustomerRecord
        }
    )
}

export default ViewCustomerRecordCtrl;
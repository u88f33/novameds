import CustomerCollection from "../../../../../models/customers.model.js";

const UpdateCustomerRecordCtrl = async ( req, res, next ) => {

    const singleCustomerRecord =
    await CustomerCollection.findById( req.params.id );
    
    res.render(
        "admin/manage/customers/update",
        {
            singleCustomerRecord,
            errorMessage: req.query.errorMessage
        }
    )

}

export default UpdateCustomerRecordCtrl;
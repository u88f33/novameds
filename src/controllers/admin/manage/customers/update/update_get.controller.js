import CustomerCollection from "../../../../../models/customers.model.js";

const UpdateCustomerRecordCtrl = async ( req, res, next ) => {

    const singleCustomerRecord =
    await CustomerCollection.findById( req.params.id );

    const customerRecordsErrors = req.session.customerRecordsErrors || [];

    req.session.customerRecordsErrors = null;
    
    res.render(
        "admin/manage/customers/update",
        {
            singleCustomerRecord,
            customerRecordsErrors,
            message: req.query.message,
            errorMessage: req.query.errorMessage
        }
    )

}

export default UpdateCustomerRecordCtrl;
const AddCustomerRecordCtrl = ( req, res, next ) => {
    const message = req.query.message || "";
    const errorMessage = req.query.errorMessage || "";

    const customerRecordsErrors = req.session.customerRecordsErrors || [];

    req.session.customerRecordsErrors = null;

    res.render(
        "admin/manage/customers/add",
        {
            message,
            errorMessage,
            customerRecordsErrors
        }
    );
}

export default AddCustomerRecordCtrl;
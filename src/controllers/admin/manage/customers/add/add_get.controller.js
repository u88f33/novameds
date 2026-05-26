const AddCustomerRecordCtrl = ( req, res, next ) => {
    const errorMessage = req.query.error || "";

    const customerRecordsErrors = req.session.customerRecordsErrors || [];

    req.session.customerRecordsErrors = null;

    res.render(
        "admin/manage/customers/add",
        {
            errorMessage,
            customerRecordsErrors
        }
    );
}

export default AddCustomerRecordCtrl;
const AddCustomerRecordCtrl = ( req, res, next ) => {
    const errorMessage = req.query.error || "";

    res.render(
        "admin/manage/customers/add",
        {
            errorMessage
        }
    );
}

export default AddCustomerRecordCtrl;
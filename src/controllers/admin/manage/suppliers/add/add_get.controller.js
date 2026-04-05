const ManageSupplierRecordsCtrl = ( req, res, next ) => {
    res.render(
        "admin/manage/suppliers/add",
        {
            arrayOfErrorMessages: [],
            arrayOfErrorValues: []
        }
    );
}

export default ManageSupplierRecordsCtrl;
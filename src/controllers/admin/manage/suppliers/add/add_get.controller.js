const ManageSupplierRecordsCtrl = ( req, res, next ) => {
    
    try {

        res.render(
            "admin/manage/suppliers/add",
            {
                arrayOfErrorMessages: [],
                arrayOfErrorValues: []
            }
        );

    } catch ( error ) {
        console.log(
            "File path: /src/controllers/admin/manage/suppliers/add/add_get.controller.js"
        );

        console.log( `Error: ${ error }` );
    }

}

export default ManageSupplierRecordsCtrl;
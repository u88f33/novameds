/**
 * Developer: Muhammad Umar Farooq
 * File name: add_get.controller.js
 * Modified date: April 6, 2026
 * 
 * 
 * ---------------------------------------------------------------
 * Purpose of a file
 * ---------------------------------------------------------------
 * This file displays a "/src/views/admin/manage/suppliers/add_get.ejs" file on url
 * "http://localhost:5050/admin/manage/suppliers/add"
 * ----------------------------------------------------------------- 
**/

const ManageSupplierRecordsCtrl = ( req, res, next ) => {
    
    try {
        const supplierRecordsErrors = req.session.supplierRecordsErrors || [];

        req.session.supplierRecordsErrors = null;

        let message = req.query.message || "";
        let errorMessage = req.query.errorMessage || "";
        
        
        res.render(
            "admin/manage/suppliers/add",
            {
                supplierRecordsErrors,
                message,
                errorMessage
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
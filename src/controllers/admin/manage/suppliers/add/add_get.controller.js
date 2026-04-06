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
        /**
         * Passes validation data to the EJS view.
         *
         * res.render() receives an object containing:
         * 
         * 1) arrayOfErrorMessages: ( defined in "./add_post.controller.js" )
         *    - Stores validation error messages from express-validator
         *    - Extracted from validationResult(req).errors[].msg
         *
         * 2) arrayOfErrorValues: ( defined in "./add_post.controller.js" )
         *    - Stores invalid input values submitted by the user
         *    - Extracted from validationResult(req).errors[].value
         *
         * These arrays are used in:
         * "/src/views/admin/manage/suppliers/add.ejs"
         * to display errors and repopulate form fields when validation fails.
         */

        
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
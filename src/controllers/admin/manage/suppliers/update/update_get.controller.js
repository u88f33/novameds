import SuppliersCollection from "../../../../../models/suppliers.model.js";

/**
 * Developer: Muhammad Umar Farooq
 * File name: update_get.controller.js
 * Modified date: April 6, 2026
 * 
 * 
 * ---------------------------------------------------------------
 * Purpose of a file:
 * ---------------------------------------------------------------
 * This file displays a "/src/views/admin/manage/suppliers/update_get.ejs" file
 * on a url "http://localhost:5050/admin/manage/suppliers/update/supplier_db_id"
 * ----------------------------------------------------------------- 
**/

const UpdateSupplierRecordsCtrl = async ( req, res, next ) => {
    try {

        /**
         * Fetch a supplier record by ID from the database.
         * If a matching record is found, store it in `singleSupplierRecordInDB`.
         * 
         * The "singleSupplierRecordInDB" is passed in res.render() method
         * and its keys are specifying the value of each input element
         * in a form in "./src/views/admin/manage/suppliers/update.ejs"
         */
        const singleSupplierRecordInDB = 
        await SuppliersCollection.findById( req.params.id );

        /**
         * Render update page with supplier data.
         *
         * updatedSupplierRecord 
         * - Values submitted from the form in "./src/views/admin/manage/suppliers/update.ejs"
         * 
         * singleSupplierRecordInDB 
         * - Existing supplier record from DB
         * 
         */

        res.render(
            "admin/manage/suppliers/update",
            {
                updatedSupplierRecord : {},
                singleSupplierRecordInDB
            }
        );

    } catch ( error ) {

        console.log( 
            `File path: /src/controllers/admin/manage/suppliers/update/update_get.controller.js` 
        );

        console.log( `Error: ${ error }` );
        
    }
}

export default UpdateSupplierRecordsCtrl;
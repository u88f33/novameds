import SuppliersCollection from "../../../../../models/suppliers.model.js";

/**
 * Developer: Muhammad Umar Farooq
 * File name: update_post.controller.js
 * Modified date: April 6, 2026
 * 
 * 
 * ---------------------------------------------------------------
 * Purpose of a file:
 * ---------------------------------------------------------------
 * The input data received from an HTML form in "/views/admin/manage/suppliers/update.ejs"
 * is received in this file, which contains the logic to process that form data and update
 * a record of a "supplier" collection in a Database.
 * ----------------------------------------------------------------- 
**/

const UpdateSupplierRecordsCtrlPost = async ( req, res, next ) => {

    try {

        /**
         * Extract data from form field
         */
        const {
            supplier_name,
            supplier_email,
            supplier_phone,
            supplier_address
        } = req.body;

        /**
         * Format form input names to map with database schema
         */
        const updatedSupplierRecord = {
            supplierName: supplier_name,
            supplierEmail: supplier_email,
            supplierPhone: supplier_phone,
            supplierAddress: supplier_address
        }

        // Update Data of a supplier record in database.
        const updateSupplierRecordInDatabase = 
        await SuppliersCollection.findByIdAndUpdate( req.params.id, updatedSupplierRecord );

        // Execute if a Supplier record is not found.
        if ( !updateSupplierRecordInDatabase ) {
            console.log( 
                "File: /src/controllers/admin/manage/suppliers/update_post.controller.js"
            );
            console.log( "Failed to Update Supplier Record in Database" );
            return;
        }

        console.log( "Supplier Record updated successfully" );
        console.log( updatedSupplierRecord );
        
        /**
         * res.render() receives object as parameter with two properties.
         * 
         * @property: singleSupplierRecordInDB
         * - Used in "update_get.controller.js" having old record
         * of a supplier in a database. 
         */
        res.render(
            `admin/manage/suppliers/update`,
            {
                singleSupplierRecordInDB: {},
                updatedSupplierRecord
            }
        );

    } catch ( error ) {

        console.log( 
            "File Path: /src/controllers/admin/manage/suppliers/update/update_post.controller.js" 
        );

        console.log( `Error: ${ error }` );
    }
}

export default UpdateSupplierRecordsCtrlPost;
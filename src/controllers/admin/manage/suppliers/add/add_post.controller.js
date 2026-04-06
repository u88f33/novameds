import SuppliersCollection from "../../../../../models/suppliers.model.js";
// For checking Supplier Phone number.
import { validationResult } from "express-validator";

const AddSupplierRecordsCtrlPost = async ( req, res, next ) => {

    try {
        /**
         * Data Route of Newly added Suppliers Record: 
         * router.post( "/admin/manage/suppliers/add", AddSupplierRecordsCtrlPost );
         * 
         * When an HTML form in "src/views/admin/manage/suppliers/add.ejs" is
         * submitted, the data from that form is posted to "/admin/manage/suppliers/add".
         * The submitted values are stored in "req.body".
         
        */

        // Validating Supplier's phone number using "express-validator"
        const validationErrors = validationResult( req );
    
        /**
         * If "validationErrors" is not empty then store error messages and 
         * error values in arrays and send them to "src/views/admin/manage/suppliers/add.ejs"  
         * */ 
        if ( !validationErrors.isEmpty() ) {

            // Stores Error messages in validationErrors.errors.msg
            let arrayOfErrorMessages = [];

            // Stores Error values in validationErrors.errors.value
            let arrayOfErrorValues = [];
            
            // Storing Error Messages "validationErrors.errors.msg" in "ArrayOfError"
            for ( let error of validationErrors.errors ) {
                arrayOfErrorMessages.push( error.msg );
                arrayOfErrorValues.push( error.value );
            }

            /**
             * "ArrayOfErrorMessages" object contains error messages stored in 
             * "validationErrors.errors.msg"
             * 
             * 
             * "ArrayOfErrorsValues" object contains errors stored messages
             * stored in "validationErrors.errors.value"
             */

            res.render(
                "admin/manage/suppliers/add",
                {
                    arrayOfErrorMessages,
                    arrayOfErrorValues
                }
            )
            
            return false;
        }

        /* 
        * The data recieved in "req.body" is stored in individual variables using
        * object destructuring. 
        */
        const { 
            supplier_name, 
            supplier_email,
            supplier_phone,
            supplier_address
        } = req.body

        /**
         * The keys of "req.body" must match with the keys of collection schema
         * defined in "src/models/suppliers.model.js" database. Otherwise, data
         * would not be saved in Database.
         * */    
        const supplierRecord = {
            supplierName: supplier_name,
            supplierEmail: supplier_email,
            supplierPhone: supplier_phone,
            supplierAddress: supplier_address
        }

        /**
         * Storing data in database collection using "insertOne()".
         */

        const dataInsertedInMongoDB = await SuppliersCollection.insertOne(
            supplierRecord
        );


        if ( dataInsertedInMongoDB ) {
            console.log( `Supplier record inserted successfully in Database` );
        } else {
            console.log( `Something went wrong` );
            console.log( "Failed to insert Supplier Record in Database" );
        }

    } catch ( error ) {
        console.log( 
            `File: src/controllers/admin/manage/suppliers/add/add_post.controller.js` 
        );
        console.log( `Error: ${ error }` );
    }
    

    res.redirect( "/admin/manage/suppliers/add" );
}

export default AddSupplierRecordsCtrlPost;
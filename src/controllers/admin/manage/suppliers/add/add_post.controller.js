import SuppliersCollection from "../../../../../models/suppliers.model.js"

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
         * The keys of "req.body" must match with the keys of collection
         * in database. Otherwise, data would not be saved in Database.
         * */    
        const supplierRecrord = {
            supplierName: supplier_name,
            supplierEmail: supplier_email,
            supplierPhone: supplier_phone,
            supplierAddress: supplier_address
        }

        const dataInsertedInMongoDB = await SuppliersCollection.insertOne(
            supplierRecrord
        );

        if ( dataInsertedInMongoDB ) {
            console.log( `Supplier inserted successfully in Database` );
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
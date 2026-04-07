import MedicinesCollection from "../../../../../models/medicines.model.js";
import SuppliersCollection from "../../../../../models/suppliers.model.js";

const AddMedicineRecortCtrlPost = async ( req, res, next ) => {

    try {

        // Values received from a form in "/views/admin/manage/medicines/add.ejs"
        const {
            medicine_name,
            medicine_category,
            medicine_price,
            medicine_stock,
            supplier_id,
            medicine_image
        } = req.body;

        // Defining an object storing keys map with Medicines Collection Schema.
        const medicineRecord = {
            medicineName: medicine_name,
            medicineCategory: medicine_category,
            medicinePrice: medicine_price,
            medicineStock: medicine_stock,
            supplierId: supplier_id,
            medicineImage: req.file.filename
        }

        const dataInsertedInMongoDB = 
        await MedicinesCollection.insertOne( medicineRecord );

        const message = "";

        if ( !dataInsertedInMongoDB ) {
            console.log( "Failed to insert record in Database" );
            message = "Failed to insert record in Database"
        }

        const suppliersRecords = await SuppliersCollection.find();
        res.redirect( "/admin/manage/medicines/add?message=New Medicine Record added" );

    } catch ( error ) {
        console.log( 
            "/src/controllers/admin/manage/medicines/add/add_post.controllers.js" 
        );
        console.log( `Error: ${ error }` );
    }

}

export default AddMedicineRecortCtrlPost;
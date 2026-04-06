import SuppliersCollection from "../../../../../models/suppliers.model.js";

const UpdateSupplierRecordsCtrl = async ( req, res, next ) => {
    try {

        const singleSupplierRecordInDB = 
        await SuppliersCollection.findById( req.params.id );

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
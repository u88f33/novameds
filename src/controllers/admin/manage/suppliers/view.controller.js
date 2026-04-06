import SuppliersCollection from "../../../../models/suppliers.model.js";

const ViewSupplierRecordsCtrl = async ( req, res, next ) => {

    try {

        const singleSupplierRecord = 
        await SuppliersCollection.findById( req.params.id );

        res.render(
            "admin/manage/suppliers/view",
            {
                singleSupplierRecord
            }
        );
    
    } catch ( error ) {

        console.log( 
            "File Path: /src/controlers/admin/manage/suppliers/view.controller.js" 
        );
        console.log( `Error: ${ error }` );
        
    }

}

export default ViewSupplierRecordsCtrl;
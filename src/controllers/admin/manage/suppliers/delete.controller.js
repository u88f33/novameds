import SuppliersCollection from "../../../../models/suppliers.model.js";

const DeleteSupplierRecordCtrl = async ( req, res, next ) => {

    try {

        let totalSupplierRecords = await SuppliersCollection.countDocuments();
        
        if ( totalSupplierRecords <= 15 ) {
            return res.redirect(`/admin/manage/suppliers/?errorMessage=This Demo Project must contains at least 15 supplier records.`);
        }

        const deletedSupplierRecord = 
        await SuppliersCollection.findByIdAndDelete( req.params.id );

        if ( !deletedSupplierRecord ) {
            console.log( "Supplier Record not found." );
        }
        
        res.redirect( "/admin/manage/suppliers" );

    } catch ( error ) {

        console.log( 
            "File path: src/controllers/admin/manage/suppliers/delete.controller.js" 
        );
        
        console.log( `Error: ${ error }` );

    }

}

export default DeleteSupplierRecordCtrl;
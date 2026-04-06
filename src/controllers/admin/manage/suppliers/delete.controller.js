import SuppliersCollection from "../../../../models/suppliers.model.js";

const DeleteSupplierRecordCtrl = async ( req, res, next ) => {

    try {

        const deletedSupplierRecord = 
        await SuppliersCollection.findByIdAndDelete( req.params.id );

        if ( !deletedSupplierRecord ) {
            console.log( "Supplier Record not found." );
        }

        console.log( "Supplier Record deleted successfully" );
        console.log( deletedSupplierRecord );
        
        res.redirect( "/admin/manage/suppliers" );

    } catch ( error ) {

        console.log( 
            "File path: src/controllers/admin/manage/suppliers/delete.controller.js" 
        );
        
        console.log( `Error: ${ error }` );

    }

}

export default DeleteSupplierRecordCtrl;
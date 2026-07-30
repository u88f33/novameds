import SuppliersCollection from "../../../../models/suppliers.model.js";
import MedicinesCollection from "../../../../models/medicines.model.js";

const DeleteSupplierRecordCtrl = async ( req, res, next ) => {

    try {

        // Check if any medicine is linked to a supplier or not.
        let medicineLinkToSupplier = await MedicinesCollection
        .findOne({ supplierId: req.params.id });

        /** 
         *  If any medicine is linked to a supplier than the supplier record,
         * than the supplier record cannot be deleted.
        */
        if ( medicineLinkToSupplier ) {
            return res.redirect(
                "/admin/manage/suppliers/?errorMessage=Cannot delete this supplier record because Medicines are linked to this supplier"
            );
        }

        let totalSupplierRecords = await SuppliersCollection.countDocuments();
        
        if ( totalSupplierRecords <= 15 ) {
            return res.redirect(`/admin/manage/suppliers/?errorMessage=This Demo Project must contains at least 15 supplier records.`);
        }

        const deletedSupplierRecord = 
        await SuppliersCollection.findByIdAndDelete( req.params.id );

        if ( !deletedSupplierRecord ) {
            console.log( "Supplier Record not found." );
        }
        
        res.redirect( "/admin/manage/suppliers/?message=Supplier record deleted successfully" );

    } catch ( error ) {

        console.log( 
            "File path: src/controllers/admin/manage/suppliers/delete.controller.js" 
        );
        
        console.log( `Error: ${ error }` );

    }

}

export default DeleteSupplierRecordCtrl;
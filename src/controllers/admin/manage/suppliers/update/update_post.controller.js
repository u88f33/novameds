import SuppliersCollection from "../../../../../models/suppliers.model.js";

const UpdateSupplierRecordsCtrlPost = async ( req, res, next ) => {
    const {
        supplier_name,
        supplier_email,
        supplier_phone,
        supplier_address
    } = req.body;

    const updatedSupplierRecord = {
        supplierName: supplier_name,
        supplierEmail: supplier_email,
        supplierPhone: supplier_phone,
        supplierAddress: supplier_address
    }

    const updateSupplierRecordInDatabase = 
    await SuppliersCollection.findByIdAndUpdate( req.params.id, updatedSupplierRecord );

    if ( !updateSupplierRecordInDatabase ) {
        console.log( 
            "File: /src/controllers/admin/manage/suppliers/update_post.controller.js"
         );
        console.log( "Failed to Update Supplier Record in Database" );
        return;
    }

    console.log( "Supplier Record updated successfully" );
    console.log( updatedSupplierRecord );
    
    res.render(
        `admin/manage/suppliers/update`,
        {
            singleSupplierRecordInDB: {},
            updatedSupplierRecord
        }
    );
}

export default UpdateSupplierRecordsCtrlPost;
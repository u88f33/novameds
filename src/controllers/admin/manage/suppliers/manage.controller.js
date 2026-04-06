import SuppliersCollection from "../../../../models/suppliers.model.js";


const ManageSupplierRecordsCtrl = async ( req, res, next ) => {

    try {

        const page = Number.parseInt(req.query.page) || 1;
        const limit = Number.parseInt(req.query.limit) || 5;
        const skip = ( page - 1 ) * limit;
        const totalSupplierRecords = await SuppliersCollection.countDocuments();
        const totalPages =  Math.ceil( totalSupplierRecords / limit );

        
        // Return all the documents in a "suppliers" collection
        const suppliersRecordsInDatabase =
        await SuppliersCollection.find()
        .skip( skip )
        .limit( limit )
        .sort( { createdAt: -1 } );


        res.render(
            "admin/manage/suppliers/manage",
            {
                suppliersRecordsInDatabase,
                currentPage: page,
                totalPages
            }
        );

    } catch ( error ) {
        
        console.log( 
            "File path: /src/controllers/admin/manage/suppliers/manage.controller.js" 
        );
        
        console.log( `Error: ${ error }` );
    }

}

export default ManageSupplierRecordsCtrl;
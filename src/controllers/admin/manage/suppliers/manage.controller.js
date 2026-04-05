import SuppliersCollection from "../../../../models/suppliers.model.js";


const ManageSupplierRecordsCtrl = async ( req, res, next ) => {

    const page = Number.parseInt(req.query.page) || 1;
    const limit = Number.parseInt(req.query.limit) || 5;
    const skip = ( page - 1 ) * limit;
    const totalSupplierRecords = await SuppliersCollection.countDocuments();
    const totalPages =  Math.ceil( totalSupplierRecords / limit );
    
    console.log( `page: `, page );
    console.log( `limit: `, limit );
    console.log( `Supplier records: `, totalSupplierRecords );
    console.log( `Total Pages: `, totalPages );


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
}

export default ManageSupplierRecordsCtrl;
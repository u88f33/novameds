import CustomerCollections from "../../../../models/customers.model.js";

const searchCustomerRecordCtrl = async ( req, res, next ) => {

    try {

        const search = req.query.search || "";

        const filter = search
            ? {
                $or: [
                    { customerName: { $regex: search, $options: "i" } },
                    { customerEmail: { $regex: search, $options: "i" } },
                    { customerPhone: { $regex: search, $options: "i" } },
                    { customerAddress: { $regex: search, $options: "i" } },
                    { customerCity: { $regex: search, $options: "i" } },
                    { customerCountry: { $regex: search, $options: "i" } }
                ]
            }
            : {};

        const customerRecordsFromDB = await CustomerCollections
            .find(filter)
            .limit(5);

        res.json( customerRecordsFromDB )

    } catch ( error ) {

        console.log( 
            "/src/controllers/admin/manage/customers/search.controller.js"
        );
        
        console.log( `Error: ${ error }` );

    }

}

export default searchCustomerRecordCtrl;
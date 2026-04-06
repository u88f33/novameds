import SuppliersCollection from "../../../../models/suppliers.model.js";

const SearchSuppliersApiCtrl = async (req, res) => {

    try {

        const search = req.query.search || "";

        const filter = search
            ? {
                $or: [
                    { supplierName: { $regex: search, $options: "i" } },
                    { supplierPhone: { $regex: search, $options: "i" } },
                    { supplierAddress: { $regex: search, $options: "i" } }
                ]
            }
            : {};

        const suppliers = await SuppliersCollection
            .find(filter)
            .sort({ createdAt: -1 })
            .limit(5);

        res.json(suppliers);

    } catch ( error ) {

        console.log( 
            "/src/controllers/admin/manage/suppliers/search.controller.js"
        );
        
        console.log( `Error: ${ error }` );

    }

}

export default SearchSuppliersApiCtrl;
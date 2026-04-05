import SuppliersCollection from "../../../../models/suppliers.model.js";

const SearchSuppliersApiCtrl = async (req, res) => {

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
}

export default SearchSuppliersApiCtrl;
import MedicinesCollection from "../../models/medicines.model.js";


const ProductPageCtrl = async ( req, res, next ) => {

    const singleMedicineRecord = 
    await MedicinesCollection.findById( req.params.id );

    res.render(
        "user/product",
        {
            medicineRecords: [],
            singleMedicineRecord
        }
    )
}

export default ProductPageCtrl;
import MedicinesCollection from "../../models/medicines.model.js";
import medicineRecordsArray from "../../utils/medicines/records.js"
import { inCart } from "./cart/cart_post.controller.js";

const ProductPageCtrl = async ( req, res, next ) => {

    const singleMedicineRecord = 
    await MedicinesCollection.findById( req.params.id );

    const medicineRecords = await medicineRecordsArray();

    console.log( inCart );

    res.render(
        "user/product",
        {
            medicineRecords,
            singleMedicineRecord,
            errorMessage: req.query.errorMessage,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: req.session.userLoginSession.userId
        }
    )
}

export default ProductPageCtrl;
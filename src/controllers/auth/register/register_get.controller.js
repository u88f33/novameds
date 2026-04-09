import MedicineCollection from "../../../models/medicines.model.js";

const RegisterGetCtrl = async ( req, res, next ) => {

    const medicineRecords = await MedicineCollection.find();
    

    res.render(
        "auth/register",
        { medicineRecords }
    )
}

export default RegisterGetCtrl;
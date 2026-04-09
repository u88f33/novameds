import MedicineCollection from "../../../models/medicines.model.js";

const LoginGetCtrl = async ( req, res, next ) => {

    const medicineRecords = await MedicineCollection.find();

    res.render( "auth/login",
        { 
            medicineRecords
        }
     );
}

export default LoginGetCtrl;
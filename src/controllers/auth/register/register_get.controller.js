import medicineRecordsArray from "../../../utils/medicines/records.js";

const RegisterGetCtrl = async ( req, res, next ) => {

    const medicineRecords = await medicineRecordsArray()
    

    res.render(
        "auth/register",
        { medicineRecords }
    )
}

export default RegisterGetCtrl;
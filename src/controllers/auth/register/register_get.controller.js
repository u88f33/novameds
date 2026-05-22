import medicineRecordsArray from "../../../utils/medicines/records.js";

const RegisterGetCtrl = async ( req, res, next ) => {

    const medicineRecords = await medicineRecordsArray()
    const validateRegistrationErrors = req.session.errors || [];

    // Clear errors after reading
    req.session.errors = null;


    res.render(
        "auth/register",
        {
            medicineRecords,
            validateRegistrationErrors,
            errorMessage: req.query.errorMessage
        },
    )
}

export default RegisterGetCtrl;
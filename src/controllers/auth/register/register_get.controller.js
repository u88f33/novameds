import medicineRecordsArray from "../../../utils/medicines/records.js";

const RegisterGetCtrl = async ( req, res, next ) => {

    const medicineRecords = await medicineRecordsArray()
    const validateRegistrationErrors = req.session.errors || [];

    console.log( "------------------------- Registration Get ------------------------------" );
    console.log( validateRegistrationErrors );
    console.log( "-------------------------------------------------------------------------" );
    

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
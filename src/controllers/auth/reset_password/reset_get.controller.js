import medicineRecordsArray from "../../../utils/medicines/records.js"

const UserResetPasswordCtrl = async ( req, res, next ) => {

    try {

        const medicineRecords = await medicineRecordsArray();

        res.render(
            "auth/forgot_password/user/reset_password",
            {
                token: req.params.token,
                medicineRecords,
                errorMessage: req.query.errorMessage
            }
        )

    } catch ( error ) {
        console.log( `/src/controllers/auth/reset_password/reset_get.controller.js` );
        console.log( `Error: ${ error }` );
    }
    
}

export default UserResetPasswordCtrl;
import medicineRecordsArray from "../../../../utils/medicines/records.js";

const UserForgotPasswordCtrl = async ( req, res, next ) => {

    try {
        
        let medicineRecords = await medicineRecordsArray();

        res.render(
            "auth/forgot_password/user/forgot_password.ejs",
            {
                medicineRecords,
                errorMessage: req.query.errorMessage
            }
        )

    } catch ( error ) {

        console.log( "/src/controllers/auth/forgot_password/user/user_get.controller.js" );
        console.log( `Error: ${ error }` );
    
    }
}

export default UserForgotPasswordCtrl;
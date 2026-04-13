import medicineRecordsArray from "../../../../utils/medicines/records.js";

const UserForgotPasswordCtrl = async ( req, res, next ) => {

    let medicineRecords = await medicineRecordsArray();

    res.render(
        "auth/forgot_password/user/forgot_password.ejs",
        {
            medicineRecords,
            errorMessage: ""
        }
    )
}

export default UserForgotPasswordCtrl;
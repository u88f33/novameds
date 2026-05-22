import medicineRecordsArray from "../../../utils/medicines/records.js"
import CustomersCollection from "../../../models/customers.model.js";

const SettingsPageUrl = async ( req, res, next ) => {
    const medicineRecords = await medicineRecordsArray();
    const loggedInUser = await CustomersCollection.findById( req.params.id );
    const validateProfileSettings = req.session.profileSettingErrors || [];

    req.session.profileSettingErrors = null;

    res.render(
        "user/settings",
        {
            medicineRecords,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: req.session.userLoginSession.userId,
            loggedInUser,
            validateProfileSettings,
            message: req.query.message,
            errorMessage: req.query.errorMessage
        }
    )
}

export default SettingsPageUrl;
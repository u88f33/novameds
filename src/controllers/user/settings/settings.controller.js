import medicineRecordsArray from "../../../utils/medicines/records.js"
import CustomersCollection from "../../../models/customers.model.js";

const SettingsPageUrl = async ( req, res, next ) => {
    const medicineRecords = await medicineRecordsArray();
    const loggedInUser = await CustomersCollection.findById( req.params.id );

    res.render(
        "user/settings",
        {
            medicineRecords,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: req.session.userLoginSession.userId,
            loggedInUser,
            errorMessage: req.query.errorMessage
        }
    )
}

export default SettingsPageUrl;
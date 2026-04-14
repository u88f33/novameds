import MedicinesCollection from "../../models/medicines.model.js";
import medicineRecordsArray from "../../utils/medicines/records.js"
/* 
When a user Logins to our Website, this page appears open
on http://localhost:5050/profile
*/

const UserProfileCtrl = async ( req, res, next ) => {
    
    const medicineRecords = await medicineRecordsArray();

    const page = req.query.page || 1;
    const limit = req.query.limit || 12;
    const medicineCategory = req.query.category || "";

    const search = ( medicineCategory != "" )? { medicineCategory } : {};

    const medicinesRecordsPaginationInfo = 
    await MedicinesCollection.paginate( search, {
        page,
        limit
    });

    res.render(
        "user/profile",
        {
            MedicinesRecordsFromDB: medicinesRecordsPaginationInfo.docs,
            medicineRecords,
            medicinesRecordsPaginationInfo,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: req.session.userLoginSession.userId
        }
    );
}

export default UserProfileCtrl;
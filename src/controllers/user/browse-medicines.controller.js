import medicineRecordsArray from "../../utils/medicines/records.js";
import MedicinesCollection from "../../models/medicines.model.js";


const BrowseMedicinesByLoggedInUserCtrl = async ( req, res ,next ) => {
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
        "user/browseMedicines.ejs",
        {
            MedicinesRecordsFromDB: medicinesRecordsPaginationInfo.docs,
            medicineRecords,
            medicinesRecordsPaginationInfo,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: req.session.userLoginSession.userId
        }
    );
}

export default BrowseMedicinesByLoggedInUserCtrl;
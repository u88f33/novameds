import MedicinesCollection from "../../models/medicines.model.js";

/* 
When a user first time opens our Website, this page appears open
on http://localhost:5050
*/

const HomePageCtrl = async ( req, res, next ) => {

    const medicineRecords = await MedicinesCollection.find();

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
        "home/home",
        {
            MedicinesRecordsFromDB: medicinesRecordsPaginationInfo.docs,
            medicineRecords,
            medicinesRecordsPaginationInfo
        }
    )
}

export default HomePageCtrl;
import MedicinesCollection from "../../../../models/medicines.model.js";

const ManageMedicineRecordsCtrl = async ( req, res, next ) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 5

    const MedicineRecordsPaginationInfo = await MedicinesCollection.paginate(
        {},
        {
            page,
            limit
        }
    );

    const MedicineRecordsArray = MedicineRecordsPaginationInfo.docs;
    console.log( MedicineRecordsPaginationInfo );

    res.render(
        "admin/manage/medicines/manage",
        {
            MedicineRecordsPaginationInfo,
            MedicineRecordsArray
        }
    )
}

export default ManageMedicineRecordsCtrl;
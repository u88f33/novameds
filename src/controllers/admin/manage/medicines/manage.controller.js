import MedicinesCollection from "../../../../models/medicines.model.js";

const ManageMedicineRecordsCtrl = async ( req, res, next ) => {

    const MedicinesRecordsFromDB = await MedicinesCollection.find();

    res.render(
        "admin/manage/medicines/manage",
        {
            MedicinesRecordsFromDB
        }
    )
}

export default ManageMedicineRecordsCtrl;
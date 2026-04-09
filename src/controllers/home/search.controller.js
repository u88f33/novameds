import MedicinesCollection from "../../models/medicines.model.js";

const searchMedicineRecordCtrl = async ( req, res, next ) => {

    try {

        const search = req.query.search || "";

        const filter = search
            ? {
                $or: [
                    { medicineName: { $regex: search, $options: "i" } },
                    { medicineCategory: { $regex: search, $options: "i" } }
                ]
            }
            : {};

        const medicineRecordsFromDB = await MedicinesCollection
            .find(filter)
            .limit(12);

        res.json( medicineRecordsFromDB )

    } catch ( error ) {

        console.log( 
            "/src/controllers/home/search.controller.js"
        );
        
        console.log( `Error: ${ error }` );

    }

}

export default searchMedicineRecordCtrl;
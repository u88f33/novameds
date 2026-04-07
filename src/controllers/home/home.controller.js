import MedicinesCollection from "../../models/medicines.model.js";

/* 
When a user first time opens our Website, this page appears open
on http://localhost:5050
*/

const HomePageCtrl = async ( req, res, next ) => {

    const MedicinesRecordsFromDB = await MedicinesCollection.find();

    res.render(
        "home/home",
        {
            MedicinesRecordsFromDB
        }
    )
}

export default HomePageCtrl;
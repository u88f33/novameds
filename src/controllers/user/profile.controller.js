import MedicinesCollection from "../../models/medicines.model.js";

const UserProfileCtrl = async ( req, res, next ) => {
    
    const MedicinesRecordsFromDB = await MedicinesCollection.find();

    res.render(
        "user/profile",
        {
            MedicinesRecordsFromDB
        }
    );
}

export default UserProfileCtrl;
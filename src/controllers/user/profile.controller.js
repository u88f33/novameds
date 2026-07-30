import MedicinesCollection from "../../models/medicines.model.js";
import medicineRecordsArray from "../../utils/medicines/records.js"
/* 
When a user Logins to our Website, this page appears open
on http://localhost:5050/profile
*/

const UserProfileCtrl = async ( req, res, next ) => {
    
    try {

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

        /* 
            If an admin tries to access the "/profile" route, then first check
            whether the value of "req.session.userLoginSession" is set, then
            opens the "user/profile.ejs". Otherwise redirect to "/login" route.
        */
        if ( !req.session.userLoginSession ) {
            return res.redirect( "/login" )
        }
        

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

    } catch ( err ) {

        console.log( "/src/controllers/user/profile.controller.js" );
        console.log( `Error: ${ err }` );

    }

}

export default UserProfileCtrl;
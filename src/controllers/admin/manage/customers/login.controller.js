import CustomersCollection from "../../../../models/customers.model.js";

const UserAccountLoggedInByAdminCtrl = async ( req, res, next ) => {
    
    try {


        const findUser = await CustomersCollection.findById( req.params.id );

        // Session
        req.session.userLoginSession = {
            userId: findUser._id,
            userName: findUser.customerName
        }
        
        res.redirect("/profile");


    } catch ( error ) {

        console.log( `/src/controllers/admin/manage/customers/login.controllers.js` );
        console.log( `Error: ${ error }` );
    
    }

}

export default UserAccountLoggedInByAdminCtrl;
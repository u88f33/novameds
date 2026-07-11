import CustomersCollection from "../../../../models/customers.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const UserLogoutGetCtrl = async ( req, res, next ) => {

        const adminToken = req.cookies.adminToken;
        const userToken = req.cookies.userToken;

        if ( adminToken ) {
            return res.redirect( "/admin/manage/customers" );
        }

        if ( userToken ) {
            try {
                const userId = req.session.userLoginSession.userId;

                // Find User who is Logged In By Google
                const findUser = await CustomersCollection.findById(
                       userId             
                );

                // If the User is logged in By Google, then delete his/her record.
                if ( findUser.provider == "google" ) {
                    const deleteUserRecord = 
                    await CustomersCollection.findByIdAndDelete(
                        userId
                    )                    
                }

            } catch ( error ) {
                console.log( "/src/controllers/auth/logout/user/logout.controller.js" );
                console.log( `Error: ${ err }` )
            }

            req.session.destroy( () => {
                console.log( "Session destroyed!!!" );
            } );

            res.clearCookie( "userToken", {
                httpOnly: true,
                secure: false,
                path: "/"
            });

            return res.redirect( "/login" );
        }
    
        return res.redirect( "/login" );
    
}

export default UserLogoutGetCtrl;
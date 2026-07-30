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
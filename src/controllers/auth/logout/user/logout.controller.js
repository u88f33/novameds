import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const UserLogoutGetCtrl = ( req, res, next ) => {

        const adminToken = req.cookies.adminToken;
        const userToken = req.cookies.userToken;

        if ( adminToken ) {
            return res.redirect( "/admin/manage/customers" );
        }

        if ( userToken ) {
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
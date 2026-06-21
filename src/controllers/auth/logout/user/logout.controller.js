import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const UserLogoutGetCtrl = ( req, res, next ) => {

    res.clearCookie( "userToken", {
        httpOnly: true,
        secure: false,
        path: "/"
    });
    
    res.redirect( "/login" );

}

export default UserLogoutGetCtrl;
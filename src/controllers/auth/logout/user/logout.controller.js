import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const UserLogoutGetCtrl = ( req, res, next ) => {

    try {

        // Verify Whether the Customer Profile is logged in by Admin or not.
        const decodeAdminToken = 
        jwt.verify(
            req.cookies.adminToken,
            process.env.JWT_SECRET_KEY
        )

        if ( decodeAdminToken ) {
            return res.redirect( "/admin/manage/customers" );
        } 

    } catch ( err ) {
        
        console.log( `Error: ${ err }` );
        res.redirect( "/admin/manage/customers" );

    }

    res.clearCookie( "userToken", {
        httpOnly: true,
        secure: false
    });
    
    res.redirect( "/login" );

}

export default UserLogoutGetCtrl;
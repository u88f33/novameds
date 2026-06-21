import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const UserLoginMiddleware = ( req, res, next ) => {

    try {
        
        // Both Admin and User can login to user account.
        const verification = jwt.verify( 
            req.cookies.userToken || req.cookies.adminToken,
            process.env.JWT_SECRET_KEY  
        );

        
        if ( !verification ) {
            res.redirect( "/login" )
        };

        next();
        
    } catch ( err ) {
        
        res.redirect( "/login" );
        
    }
    
}

export default UserLoginMiddleware;
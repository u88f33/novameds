import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const UserLoginMiddleware = ( req, res, next ) => {

    try {
        
        const verification = jwt.verify( 
            req.cookies.userToken,
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
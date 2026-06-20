import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const UserLoginMiddleware = ( req, res, next ) => {

    try {

        const token = jwt.verify( 
            req.cookies.userToken,
            process.env.JWT_SECRET_KEY  
        );

        if ( token ) {
            next();
        }

    } catch ( err ) {

        res.redirect( "/login" );
        console.log( `Error while login: ${err.message}` );
        
    }
    
}

export default UserLoginMiddleware;
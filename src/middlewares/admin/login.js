import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const AdminLoginMiddleware = ( req, res, next ) => {
    try {

        const verification = jwt.verify(
            req.cookies.adminToken,
            process.env.JWT_SECRET_KEY
        );

        if ( !verification ) {
            res.redirect( "/login" );
        }

        next();

    } catch ( err ) {
       res.redirect('/login');
    }
}

export default AdminLoginMiddleware;
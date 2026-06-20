import CustomerCollections from "../../../../models/customers.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();

const UserLoginPostCtrl = async ( req, res, next ) => {

    try {
        const {
            user_email,
            user_password
        } = req.body;

        const findUser = await CustomerCollections.findOne( { customerEmail: user_email } );

        if ( !findUser ) {
            console.log( "User not found" );
            return res.redirect(
                "login/?errorMessage=User not found"
            )
        }

        const matchUserPassword = await bcrypt.compare( user_password, findUser.customerPassword );

        if ( !matchUserPassword ) {
            console.log( "Password do not matched" );
            return res.redirect( "/login/?errorMessage=Password do not matched" );
        }

        // Token implementation on Login using "jsonwebtoken"
        const payload = {
            userId: findUser.customerName,
            role: "User"
        };

        const jwt_secret = process.env.JWT_SECRET_KEY;
        const options = { expiresIn: "1h" };

        const token = jwt.sign(
            payload,
            jwt_secret,
            options
        );

        res.cookie( 
            "userToken", 
            token,
            {
                
            }
        );

        // Session
        req.session.userLoginSession = {
            userId: findUser._id,
            userName: findUser.customerName
        }

        res.redirect('/profile');
        
    } catch ( error ) {
        console.log( "/src/controllers/auth/login/user/login_post.controller.js" );
        console.log( `Error: ${ error }` );
    }

}

export default UserLoginPostCtrl;
import CustomerCollections from "../../../../models/customers.model.js";
import bcrypt from "bcryptjs";

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

        // Session
        req.session.userLoginSession = {
            userId: findUser._id,
            userName: findUser.customerName
        }

        console.log( req.session );
        res.redirect('/profile');
        
    } catch ( error ) {
        console.log( "/src/controllers/auth/login/user/login_post.controller.js" );
        console.log( `Error: ${ error }` );
    }

}

export default UserLoginPostCtrl;
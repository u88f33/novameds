import CustomerCollections from "../../../../models/customers.model.js";
import bcrypt from "bcryptjs";

const UserLoginPostCtrl = async ( req, res, next ) => {

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
        return res.redirect( "/login/?Password do not matched" );
    }

    // Session
    console.log( findUser );

    res.redirect('/login');
}

export default UserLoginPostCtrl;
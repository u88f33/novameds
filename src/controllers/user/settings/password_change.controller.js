import CustomersCollection from "../../../models/customers.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

const ProfilePasswordChangeCtrlPost = async ( req, res, next ) => {

    try {

        const {
            user_old_password,
            user_new_password,
            confirm_new_password
        } = req.body;

        const loggedInUser = await CustomersCollection.findById( req.params.id );

        if (!loggedInUser) {
            return res.redirect("/login");
        }

        const comparePasswords = await bcrypt.compare(
            user_old_password,
            loggedInUser.customerPassword
        );

        if ( !comparePasswords ) {
            return res.redirect( `/profile/settings/${ req.params.id }/?errorMessage=Old Password not found in Database.` );
        }

        let errors = validationResult( req );

        if ( !errors.isEmpty() ) {
            req.session.errors = errors.errors;
            return res.redirect(`/profile/settings/${ req.params.id }/?errorMessage=Password must contain at least 8 characters and must contain 1 uppercase, 1 lowercase, 1 number and 1 special character`);
        }

        if ( user_new_password != confirm_new_password ) {
            return res.redirect( `/profile/settings/${ req.params.id }/?errorMessage=Both New passwords and Confirm New Password must be same.` );
        }


        const newHashedPassword = await bcrypt.hash( user_new_password, 10 );
        loggedInUser.customerPassword = newHashedPassword;

        await loggedInUser.save();


        res.clearCookie( "userToken", {
            httpOnly: true,
            secure: false
        } );


        req.session.destroy( () => {
            res.redirect( "/login" );
        } )

    } catch ( err ) {
        
        console.log( 
            "/src/controllers/user/settings/password_change.controller.js"
        );

        console.log( `Error: ${ err }` );

    }

}

export default ProfilePasswordChangeCtrlPost;
import CustomersCollection from "../../../models/customers.model.js";
import bcrypt from "bcryptjs";

const ProfilePasswordChangeCtrlPost = async ( req, res, next ) => {

    const {
        user_old_password,
        user_new_password,
        confirm_new_password
    } = req.body;

    const loggedInUser = await CustomersCollection.findById( req.params.id );

    const comparePasswords = await bcrypt.compare(
        user_old_password,
        loggedInUser.customerPassword
    );

    if ( !comparePasswords ) {
        return res.redirect( `/profile/settings/${ req.params.id }/?errorMessage=Old Password not found in Database.` );
    }

    if ( user_new_password != confirm_new_password ) {
        return res.redirect( `/profile/settings/${ req.params.id }/?errorMessage=Both New passwords and Confirm New Password must be same.` );
    }

    const newHashedPassword = await bcrypt.hash( user_old_password, 10 );
    loggedInUser.customerPassword = newHashedPassword;

    await loggedInUser.save();

    req.session.destroy( () => {
        res.redirect( "/login" );
    } )
}

export default ProfilePasswordChangeCtrlPost;
import CustomersCollection from "../../../models/customers.model.js";
import bcrypt from "bcryptjs";

const UserResetPasswordCtrlPost = async ( req, res, next ) => {
    
    try {

        const { token } = req.params;
        const { new_password, confirm_new_password } = req.body;

        if ( new_password != confirm_new_password ) {
            return res.redirect( `/user/reset/?errorMessage=Password do not match` );
        }

        const findUser = await CustomersCollection.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() }
        });

        if ( !findUser ) {
            return res.redirect( `/user/reset/?errorMessage=Invalid or Expired token` );
        }

        const hashedPassword = await bcrypt.hash( new_password, 10 );

        findUser.customerPassword = hashedPassword;
        findUser.resetToken = undefined;
        findUser.resetTokenExpiry = undefined;

        await findUser.save();

        res.redirect(
            `/user/logout`
        );
        
    } catch ( error ) {
        
        console.log( "/src/controllers/auth/reset_password/reset_post.controller.js" );
        console.log( `Error: ${ error }` );

    }

}

export default UserResetPasswordCtrlPost;
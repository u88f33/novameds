import CustomersCollection from "../../../../models/customers.model.js";

const UserForgotPasswordCtrlPost = async ( req, res, next ) => {

    console.log( req.body );
    const { user_email } = req.body;

    const findByEmail = await CustomersCollection.findOne( 
        { customerEmail: user_email } 
    );

    if ( !findByEmail ) {
        return res.redirect( "/user/forgot/?errorMessage=Email not found" );
    }

    res.send( findByEmail );
}

export default UserForgotPasswordCtrlPost;
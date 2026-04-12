import CustomerCollections from "../../../models/customers.model.js";

const RegisterPostCtrl = async ( req, res, next ) => {

    try {

        const {
            user_name,
            user_email,
            user_password,
            user_phone,
            user_address,
            user_city,
            user_country
        } =  req.body;

        const userRecord = {
            customerName: user_name,
            customerEmail: user_email,
            customerPassword: user_password,
            customerPhone: user_phone,
            customerAddress: user_address,
            customerCity: user_city,
            customerCountry: user_country
        };

        const dataInsertedInMongoDB = 
        await CustomerCollections.insertOne( userRecord );

        if ( !dataInsertedInMongoDB ) {
            console.log( "User Data cannot be inserted in Database" )
        }

        res.redirect( "/register" );

    } catch ( error ) {
        console.log( "/src/controllers/auth/register/register_post" );
        console.log( `Error: ${ error }` );
    }

}

export default RegisterPostCtrl;
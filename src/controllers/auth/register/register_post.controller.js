import CustomerCollections from "../../../models/customers.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

const RegisterPostCtrl = async ( req, res, next ) => {

    try {

        let errors = validationResult( req );

        if ( !errors.isEmpty() ) {
            req.session.errors = errors.errors;
            return res.redirect("/register/?errorMessage=Unable to Submit Form");
        }

        let hashedPassword;

        const {
            user_name,
            user_email,
            user_password,
            confirm_user_password,
            user_phone,
            user_address,
            user_city,
            user_country
        } = req.body;

        const isEmailAlreadyFound = 
        await CustomerCollections.findOne( { customerEmail: user_email } );

        if ( isEmailAlreadyFound ) {
            return res.redirect( `/register/?errorMessage=Email already Exists` );
        }

        const isPhoneNumberAlreadyFound = 
        await CustomerCollections.findOne( { customerPhone: user_phone } );

        if ( isPhoneNumberAlreadyFound ) {
            return res.redirect( `/register/?errorMessage=Phone number already Exists` );
        }


        if ( user_password != confirm_user_password ) {
            res.redirect( "/register/?errorMessage=Password and Confirm Password do not match" );
        } else {
            hashedPassword = await bcrypt.hash( user_password, 10 );
        }

        const userRecord = {
            customerName: user_name,
            customerEmail: user_email,
            customerPassword: hashedPassword,
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
        res.redirect( `/register/?errorMessage=${error}}` );
    }

}

export default RegisterPostCtrl;
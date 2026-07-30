import CustomersCollection from "../../../models/customers.model.js"
import { validationResult } from "express-validator";

const ProfilePageSettingCtrlPost = async ( req, res, next ) => {

    try {

        let errors = validationResult( req );

        if ( !errors.isEmpty() ) {
            req.session.profileSettingErrors = errors.errors;
            return res.redirect(`/profile/settings/${ req.params.id }`);
        }

        const {
            user_name,
            user_email,
            user_phone,
            user_address,
            user_city,
            user_country
        } = req.body;

        const updatedRecord = {
            customerName: user_name,
            customerEmail: user_email,
            customerPhone: user_phone,
            customerAddress: user_address,
            customerCity: user_city,
            customerCountry: user_country
        };

        const updateRecordInDB = await CustomersCollection.findByIdAndUpdate(
            req.params.id,
            updatedRecord
        );

        if ( !updateRecordInDB ) {
            return res.redirect( `/profile/settings/${ req.params.id }/?errorMessage=Record not found` );
        }

        res.redirect(`/profile/settings/${ req.params.id }/?message=Profile updated successfully`);

    } catch( err ) {

        console.log( "/src/controllers/user/settings/profile_setting.controller.js" );
        console.log( `Error: ${ err }` );

    }

}

export default ProfilePageSettingCtrlPost;
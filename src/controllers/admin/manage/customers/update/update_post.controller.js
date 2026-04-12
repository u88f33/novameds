import CustomerCollection from "../../../../../models/customers.model.js";
import bcrypt from "bcryptjs";

const UpdateCustomerRecordCtrlPost = async ( req, res, next ) => {
    try {
        let singleCustomerRecord = 
        await CustomerCollection.findById( req.params.id );

        let hashedPassword;

        let {
            customer_name,
            customer_email,
            customer_password,
            customer_confirm_password,
            customer_phone,
            customer_address,
            customer_city,
            customer_country
        } = req.body;

        if ( customer_password != customer_confirm_password ) {
            return res.redirect( `/admin/manage/customers/update/${req.params.id}/?errorMessage=Passwords do not match` );
        }

        if ( customer_password == "" ) {
            customer_password = singleCustomerRecord.customerPassword;
        } else {
            hashedPassword = await bcrypt.hash( customer_password, 10 );
        }

        const updatedCustomerRecord = {
            customerName: customer_name,
            customerEmail: customer_email,
            customerPassword: hashedPassword,
            customerPhone: customer_phone,
            customerAddress: customer_address,
            customerCity: customer_city,
            customerCountry: customer_country
        }

        const updatedCustomerRecordsInDB = 
        await CustomerCollection.findByIdAndUpdate( req.params.id, updatedCustomerRecord );

        if ( !updatedCustomerRecordsInDB ) {
            console.log( "Record not found" );
        } 

        res.redirect( `/admin/manage/customers` );
    } catch ( error ) {
        console.log( "Something went wrong in controllers/admin/manage/customers/update/update_post" );
        console.log( `Error: ${ error }` );
    }
}

export default UpdateCustomerRecordCtrlPost;
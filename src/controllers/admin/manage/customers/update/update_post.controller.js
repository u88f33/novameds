import CustomerCollection from "../../../../../models/customers.model.js";
import bcrypt from "bcryptjs";

const UpdateCustomerRecordCtrlPost = ( req, res, next ) => {
    const {
        customer_name,
        customer_email,
        customer_password,
        customer_confirm_password,
        customer_phone,
        customer_address,
        customer_city,
        customer_country
    } = req.body;

    /** Date: April 11, 2026 at 5:44 PM */
    if ( customer_password == customer_confirm_password ) {
        
    }

    const updatedCustomerRecord = {
        customerName: customer_name,
        customerEmail: customer_email,
        customerPassword: customer_password,
        customerPhone: customer_phone,
        customerAddress: customer_address,
        customerCity: customer_city,
        customerCountry: customer_country
    }
}

export default UpdateCustomerRecordCtrlPost;
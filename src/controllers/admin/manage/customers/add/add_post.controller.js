import CustomersCollection  from "../../../../../models/customers.model.js";
import bcrypt from "bcryptjs";

const AddCustomerRecordCtrlPost = async ( req, res, next ) => {
    try {
        const {
            customer_name,
            customer_email,
            customer_phone,
            customer_address,
            customer_password,
            customer_confirm_password
        } = req.body;

        if ( customer_password != customer_confirm_password ) {
            return res.redirect( "/admin/manage/customers/add/?error=Password do not match" )
        }
        
        const hashedPassword = await bcrypt.hash( customer_password, 10 );

        const customerRecord = {
            customerName: customer_name,
            customerEmail: customer_email,
            customerPhone: customer_phone,
            customerAddress: customer_address,
            customerPassword: hashedPassword
        };

        const dataInsertedInMongoDB = await CustomersCollection.insertMany(
            customerRecord
        );

        if ( !dataInsertedInMongoDB ) {
            console.log( "Data cannot be inserted in MongoDB" );
        }
        
        res.redirect( "/admin/manage/customers/add" );
    } catch ( error ) {
        console.log( "/src/controllers/admin/manage/customers/add/add_post.controller.js" );
        console.log( `Data cannot be inserted in MongoDB: ${ error }` );
    }
}

export default AddCustomerRecordCtrlPost;
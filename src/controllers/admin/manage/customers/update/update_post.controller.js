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


    console.log( customer_name );
    console.log( customer_email );
    console.log( customer_password );
    console.log( customer_confirm_password );
    console.log( customer_phone );
    console.log( customer_address );
    console.log( customer_city );
    console.log( customer_country );
}

export default UpdateCustomerRecordCtrlPost;
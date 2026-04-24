import CustomersCollection from "../../models/customers.model.js";

const SingleCustomerAddressCtrl = async ( req, res, next ) => {
    
    const findUser = await CustomersCollection.findById( req.params.id );

    const {
        customerName,
        customerAddress,
        customerCity,
        customerCountry
    } = findUser;

    res.json(
        {
            customerName,
            customerAddress,
            customerCity,
            customerCountry
        }
    )
}

export default SingleCustomerAddressCtrl;
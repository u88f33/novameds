import CustomersCollection from "../../models/customers.model.js";

const SingleCustomerAddressCtrl = async ( req, res, next ) => {
    
    let userId = req.session.userLoginSession.userId;
    const findUser = await CustomersCollection.findById( userId );

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
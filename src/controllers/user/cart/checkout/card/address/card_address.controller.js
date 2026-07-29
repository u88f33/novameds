import { newOrder } from "../../checkout.controller.js";

const CheckoutCardAddressPost = ( req, res, next ) => {
    
    const {
        permanentAddress,
        shippingAddress
    } = req.body;

    const shipping_address = {
        address: shippingAddress.address,
        city: shippingAddress.city,
        country: shippingAddress.country,
        phone: shippingAddress.phone
    }

    const permanent_address = {
        address: permanentAddress.address,
        city: permanentAddress.city,
        country: permanentAddress.country,
        phone: permanentAddress.phone
    }

    newOrder.shippingAddress = shipping_address;
    newOrder.permanentAddress = permanent_address;
    
    res.json( {
        message: "Data sent while Card payment",
        permanentAddress,
        shippingAddress,
        data: req.body
    } );
}

export default CheckoutCardAddressPost;
import CartCollection from "../../../../models/cart.model.js";

const CheckoutPageCtrlPost = async ( req, res, next ) => {
    const {
        payment_method,
        perm_address,
        perm_city,
        perm_state,
        perm_postal,
        ship_address,
        ship_city,
        ship_state,
        ship_postal
    } = req.body;
    
    const customerId = req.session.userLoginSession.userId;
    const items = await CartCollection.find( 
        { customerId },
        {
            _id: 0,
            medicineId: 1,
            price: 1,
            quantity: 1
        }
    );
    const permanentAddress = {
        address: perm_address,
        city: perm_city,
        state: perm_state,
        postalCode: perm_postal
    }

    const shippingAddress = {
        address: ship_address,
        city: ship_city,
        state: ship_state,
        postalCode: perm_postal
    }

    let totalItems = items.length;
    let totalAmount = 0;
    for ( let i = 0; i < totalItems; ++i ) {
        totalAmount += items[i].price;
    }

    let deliveryCharges = 300;
    totalAmount = totalAmount + deliveryCharges;

    const orderData = {
        customerId,
        items,
        permanentAddress,
        shippingAddress,
        orderStatus: "Pending",
        totalAmount        
    };

    res.send(
        orderData
    );
}

export default CheckoutPageCtrlPost;
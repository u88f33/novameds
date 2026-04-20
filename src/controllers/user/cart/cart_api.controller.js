import CartCollection from "../../../models/cart.model.js";

const CartItemsApiCtrl = async ( req, res, next ) => {

    const getCartItems = await CartCollection.find({
        customerId: req.session.userLoginSession.userId
    });

    res.json( getCartItems );
}

export default CartItemsApiCtrl;
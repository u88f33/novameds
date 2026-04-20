import CartCollection from "../../../models/cart.model.js";

const CartItemDeleteCtrl = async ( req, res, next ) => {

    const customerId = req.session.userLoginSession.userId;
    const cartItemId = req.params.id;

    const deletedCartItem = 
    await CartCollection.findOneAndDelete({
        _id: cartItemId,
        customerId: req.session.userLoginSession.userId,
    })

    console.log( deletedCartItem );
    res.json( deletedCartItem );
    

}

export default CartItemDeleteCtrl;
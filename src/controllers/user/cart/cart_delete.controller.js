import CartCollection from "../../../models/cart.model.js";
import { inCart } from "./cart_post.controller.js";

const CartItemDeleteCtrl = async ( req, res, next ) => {

    const customerId = req.session.userLoginSession.userId;
    const cartItemId = req.params.id;

    
    const deletedCartItem = 
    await CartCollection.findOneAndDelete({
        _id: cartItemId,
        customerId: req.session.userLoginSession.userId,
    })
    
    // inCart = false;
    // console.log( inCart );

    res.json({
        deletedItem: deletedCartItem,
        message: "Item deleted successfully"
    })

}

export default CartItemDeleteCtrl;
import CartCollection from "../../../models/cart.model.js";

const CartItemDeleteCtrl = async ( req, res, next ) => {

    try {

        const customerId = req.session.userLoginSession.userId;
        const cartItemId = req.params.id;

        const deletedCartItem = 
        await CartCollection.findOneAndDelete({
            medicineId: cartItemId,
            customerId: req.session.userLoginSession.userId,
        })

        res.json( deletedCartItem );

    } catch ( err ) {

        console.log( `/src/controllers/user/cart/cart_delete.controller.js` );
        console.log( `Error: ${ err }` );

    }

}

export default CartItemDeleteCtrl;
import CartCollection from "../../../models/cart.model.js";


const CartItemsApiCtrl = async ( req, res, next ) => {

    try {

        if ( !req.session.userLoginSession ) {
            return res.redirect( "/login" );
        }

        const getCartItems = await CartCollection.find({
            customerId: req.session.userLoginSession.userId
        });

        
        res.json( getCartItems );
        
    } catch ( err ) {

        console.log( "/src/controllers/user/cart/cart_api.controller.js" );
        console.log( `Error: ${ err }` );

        
    }

}

export default CartItemsApiCtrl;
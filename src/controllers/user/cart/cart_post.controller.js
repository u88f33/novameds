import CartCollection from "../../../models/cart.model.js";
import mongoose from "mongoose";

const CartPageCtrlPost = async ( req, res, next ) => {
    
    try {
        let { medicineId, quantity } = req.body;
        let customerId;

        quantity = Number( quantity );
        medicineId = new mongoose.Types.ObjectId(medicineId);
        customerId = new mongoose.Types.ObjectId(req.session.userLoginSession.userId);

        const productDetails = {
            medicineId,
            customerId,
            quantity
        };

        const insertProductRecordinDB = await CartCollection.insertOne( productDetails );

        if ( !insertProductRecordinDB ) {
            return res.redirect(
                `/profile/product/${ req.params.id }/?errorMessage=Something Wrong`
            );
        }

        console.log( "Submitted using fetch" );
        res.redirect(
            `/profile/product/${ req.params.id }`
        );


    } catch ( error ) {
        
        console.log( `/src/controllers/user/cart/cart_post.controller.js` );
        console.log( `Error: ${ error }` );           

    }
    
}

export default CartPageCtrlPost;
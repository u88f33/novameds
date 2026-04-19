import CartCollection from "../../../models/cart.model.js";
import mongoose from "mongoose";

export let inCart = false;

const CartPageCtrlPost = async ( req, res, next ) => {
    
    try {
        let { medicineId, quantity } = req.body;
        let customerId;

        quantity = Number( quantity );
        medicineId = new mongoose.Types.ObjectId(medicineId);
        customerId = new mongoose.Types.ObjectId(req.session.userLoginSession.userId);
        inCart = true;

        const productDetails = {
            medicineId,
            customerId,
            quantity
        };

        const findSimilarProduct = 
        await CartCollection.findOne( { medicineId, customerId } );
        
        if ( findSimilarProduct ) {
            return;
        }

        const insertProductRecordinDB = await CartCollection.insertOne( productDetails );

        if ( !insertProductRecordinDB ) {
            return res.redirect(
                `/profile/product/${ req.params.id }/?errorMessage=Something Wrong`
            );
        }

        res.json(
            insertProductRecordinDB
        );


    } catch ( error ) {
        
        console.log( `/src/controllers/user/cart/cart_post.controller.js` );
        console.log( `Error: ${ error }` );           

    }
    
}

export default CartPageCtrlPost;
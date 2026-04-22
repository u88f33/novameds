import CartCollection from "../../../models/cart.model.js";
import mongoose from "mongoose";


const CartPageCtrlPost = async ( req, res, next ) => {
    
    try {
        let { medicineId, quantity, price } = req.body;
        let customerId;

        quantity = Number( quantity );
        medicineId = new mongoose.Types.ObjectId(medicineId);
        customerId = new mongoose.Types.ObjectId(req.session.userLoginSession.userId);
        
        const productDetails = {
            medicineId,
            customerId,
            quantity,
            price
        };
        
        const findSimilarProduct = 
        await CartCollection.findOne( { medicineId, customerId } );
        
        if ( findSimilarProduct ) {
            return res.json( 
                {
                    inCart: true,
                    message: "Product already in Cart",
                    data: findSimilarProduct
                }
            )
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
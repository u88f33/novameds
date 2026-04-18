import mongoose from "mongoose";

const CartPageCtrlPost = ( req, res, next ) => {
    
    let { medicineId, quantity } = req.body;
    let customerId;

    quantity = Number( quantity );
    medicineId = new mongoose.Types.ObjectId(medicineId);
    customerId = new mongoose.Types.ObjectId(req.session.userLoginSession.userId);

    console.log( quantity );
    console.log( medicineId );
    console.log( customerId );

    res.send( { medicineId, quantity, customerId } );
}

export default CartPageCtrlPost;
import mongoose from "mongoose";

const cartCollectionSchema = new mongoose.Schema({

    medicineId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine",
        required: true
    },

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        default: 1
    },

    price: {
        type: Number,
        required: true,
        default: 0
    }

}, { 
    timestamps: true
});

const CartCollection = mongoose.model( "Cart", cartCollectionSchema );

export default CartCollection;
import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const orderCollectionSchema = new mongoose.Schema({

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Customer"
    },
    items: [
        {
            medicineId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Medicine",
                required: true
            },
            price: {
                type: Number,
                required: true,
                min: 0
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
                min: 1
            }
        }
    ],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        }
    },
    orderStatus: {
        type: String,
        required: true,
        enum: [ "Pending", "Delivered", "Cancelled" ],
        default: "Pending"
    },
    totalAmount: {
        type: Number,
        required: true
    }
}, { 
    timestamps: true 
});

orderCollectionSchema.plugin( mongoosePaginate );

const OrderCollection = mongoose.model( "Order", orderCollectionSchema );
export default OrderCollection;
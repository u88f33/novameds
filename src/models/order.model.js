import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const addressSchema = new mongoose.Schema({
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
}, { _id: false });

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
    permanentAddress: addressSchema,
    shippingAddress: addressSchema,
    orderStatus: {
        type: String,
        required: true,
        enum: [ "Pending", "Confirmed", "Delivered", "Cancelled" ],
        default: "Pending"
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: [ "COD", "Easypaisa" ],
        default: "COD"
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
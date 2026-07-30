import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const customerCollectionSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    customerEmail: {
        type: String,
        trim: true,
        maxlength: 100,
        unique: true,
        required: true 
    },
    customerPassword: {
        type: String,
        required: false 
    },
    customerPhone: {
        type: String,
        trim: true,
    },
    customerAddress: {
        type: String,
        trim: true
    },
    customerCity: {
        type: String,
        trim: true
    },
    customerCountry: {
        type: String,
        trim: true
    },
    provider: {
        type: String,
        required: true,
        enum: ['local', 'google'],
        default: 'local'
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true 
    },
    resetToken: {
        type: String,
    },
    resetTokenExpiry: {
        type: Date
    }
}, {
    timestamps: true
});

customerCollectionSchema.plugin( mongoosePaginate );

const CustomersCollection = mongoose.model("Customer", customerCollectionSchema);

export default CustomersCollection;
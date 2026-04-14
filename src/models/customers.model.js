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
        maxlength: 100
    },
    customerPassword: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true,
        trim: true,
    },
    customerAddress: {
        type: String,
        required: true,
        trim: true
    },
    customerCity: {
        type: String,
        required: true,
        trim: true
    },
    customerCountry: {
        type: String,
        required: true,
        trim: true
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

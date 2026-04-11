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
    customerPassword: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

customerCollectionSchema.plugin( mongoosePaginate );

const CustomersCollection = mongoose.model("Customer", customerCollectionSchema);

export default CustomersCollection;

import mongoose from "mongoose";

const supplierCollectionSchema = new mongoose.Schema({
    
    supplierName: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },

    supplierEmail: {
        type: String,
        trim: true,
        default: "Email not found",
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
    },

    supplierPhone: {
        type: String,
        required: true,
        trim: true
    },

    supplierAddress: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true });

const SuppliersCollection = mongoose.model("Supplier", supplierCollectionSchema);
export default SuppliersCollection;
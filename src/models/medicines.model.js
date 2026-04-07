import mongoose from "mongoose";

const medicineCollectionSchema = new mongoose.Schema({

    medicineName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    medicineCategory: {
        type: String,
        required: true,
        trim: true
    },

    medicinePrice: {
        type: Number,
        required: true,
    },

    medicineStock: {
        type: Number,
        required: true,
        min: 0
    },

    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true
    },

    medicineImage: {
        type: String,
        default: "no-image.jpg"
    }

}, { 
    timestamps: true
});

const MedicinesCollection = mongoose.model("Medicine", medicineCollectionSchema);

export default MedicinesCollection;
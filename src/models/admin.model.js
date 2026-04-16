import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const adminCollectionSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    adminEmail: {
        type: String,
        unique: true,
        trim: true,
        maxlength: 100
    },
    adminPassword: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

adminCollectionSchema.plugin( mongoosePaginate );

const AdminCollection = mongoose.model("Admin", adminCollectionSchema);

export default AdminCollection;

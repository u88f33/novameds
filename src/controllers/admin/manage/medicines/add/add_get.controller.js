import SuppliersCollection from "../../../../../models/suppliers.model.js";


const AddMedicineRecordCtrl = async ( req, res, next ) => {

    /**
     * An array of records stored in variable `suppliersRecords` is used
     * in a file "src/controllers/admin/manage/medicines/add.ejs" in <select>
     * element of a form. Each <option> element inside select element  
     * has a "suppliersRecords[].supplierName" as its inner text and 
     * "supplierRecords[]._id" as its "value" attribute.
     */
    const suppliersRecords = await SuppliersCollection.find();

    res.render(
        "admin/manage/medicines/add",
        {
            successMessage: req.query.message,
            suppliersRecords
        }
    )
}

export default AddMedicineRecordCtrl;
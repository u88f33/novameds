import CustomerCollections from "../../../../models/customers.model.js";

const DeleteCustomerRecordCtrl = async ( req, res, next ) => {
    
    const deleteCustomerRecord = 
    await CustomerCollections.findByIdAndDelete( req.params.id );

    res.redirect( "/admin/manage/customers" )
}

export default DeleteCustomerRecordCtrl;
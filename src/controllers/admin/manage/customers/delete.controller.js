import CustomerCollections from "../../../../models/customers.model.js";
import OrdersCollections from "../../../../models/order.model.js"

const DeleteCustomerRecordCtrl = async ( req, res, next ) => {
    
    const customerId = req.params.id;

    const deleteCustomerRecord = 
    await CustomerCollections.findByIdAndDelete( customerId );

    /* 
        When an Admin deletes a Customer Record, delete 
        all his/her orders also. 
    */
    const deletedCustomerOrders =
    await OrdersCollections.deleteMany( { customerId } );

    console.log( deletedCustomerOrders );


    res.redirect( "/admin/manage/customers" )
}

export default DeleteCustomerRecordCtrl;
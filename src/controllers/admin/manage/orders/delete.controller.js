import OrdersCollection from "../../../../models/order.model.js";

const DeleteOrderRecordsCtrl = async ( req, res, next ) => {
    
    const deleteOrder = await OrdersCollection.findByIdAndDelete( req.params.id );

    res.redirect( "/admin/manage/orders" );
}

export default DeleteOrderRecordsCtrl;
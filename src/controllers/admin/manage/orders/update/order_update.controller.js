import OrderCollection from
"../../../../../models/order.model.js";

const UpdateOrderStatusCtrl = async ( req, res, next ) => {
    
    const {
        order_status
    } = req.body

    const updatedOrderStatus = await OrderCollection.updateOne(
        { _id: req.params.id },
        { $set: { orderStatus: order_status } }
    );

    res.redirect( `/admin/manage/orders/view/${req.params.id}` );
}

export default UpdateOrderStatusCtrl;
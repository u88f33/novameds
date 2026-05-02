import OrderCollection from "../../../../models/order.model.js";

const ViewOrderRecordCtrl = async ( req, res, next ) => {

    const customerOrder = await OrderCollection.findById( req.params.id )
    .populate( "customerId" )
    .populate( "items.medicineId" );

    const paymentStatuses = OrderCollection.schema.path( "paymentStatus" ).enumValues;
    const orderStatuses = OrderCollection.schema.path( "orderStatus" ).enumValues;

    res.render(
        "admin/manage/orders/view",
        {
            customerOrder,
            paymentStatuses,
            orderStatuses
        }
    )
}

export default ViewOrderRecordCtrl;
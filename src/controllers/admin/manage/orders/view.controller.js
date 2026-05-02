import OrderCollection from "../../../../models/order.model.js";

const ViewOrderRecordCtrl = async ( req, res, next ) => {

    const customerOrder = await OrderCollection.findById( req.params.id )
    .populate( "customerId" )
    .populate( "items.medicineId" );

    console.log( customerOrder );

    res.render(
        "admin/manage/orders/view",
        {
            customerOrder
        }
    )
}

export default ViewOrderRecordCtrl;
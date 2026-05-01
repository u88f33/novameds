import OrdersCollection from "../../../../models/order.model.js";

const ManageOrderRecordsCtrl = async ( req, res, next ) => {

    const customersOrder = await OrdersCollection.find()
    .populate( "customerId" );
    
    console.log( customersOrder );

    res.render(
        "admin/manage/orders/manage",
        {
            customersOrder
        }
    )
}

export default ManageOrderRecordsCtrl;
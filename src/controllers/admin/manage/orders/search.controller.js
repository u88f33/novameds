import OrderCollection from "../../../../models/order.model"

const customersOrderApi = async ( req, res, next ) => {

    const search = req.query.search || "";

    const filter = search ? {
        $or: [
            { customerName: { $regex: search, $options: i } }
        ]
    } : {};

    const customersOrders = await OrderCollection.find( filter )
    .populate( "customerId" );
}

export default customersOrderApi;
import OrdersCollection from "../../../../models/order.model.js";

const ManageOrderRecordsCtrl = async ( req, res, next ) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 5;

    const customersOrder = await OrdersCollection.paginate(
        {},
        {
            page,
            limit,
            populate: "customerId"
        }
    )
    
    console.log( customersOrder );

    res.render(
        "admin/manage/orders/manage",
        {
            customersOrder: customersOrder.docs,
            totalPages: customersOrder.totalPages,
            currentPage: customersOrder.page,
            hasPrevPage: customersOrder.hasPrevPage,
            hasNextPage: customersOrder.hasNextPage,
            prevPage: customersOrder.prevPage,
            nextPage: customersOrder.nextPage
        }
    )
}

export default ManageOrderRecordsCtrl;
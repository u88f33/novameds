import OrdersCollection from "../../../../models/order.model.js";

const ManageOrderRecordsCtrl = async ( req, res, next ) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const customersOrders = await OrdersCollection.paginate(
        {},
        {
            page,
            limit,
            populate: "customerId"
        }
    );


    res.render(
        "admin/manage/orders/manage",
        {
            customersOrders: customersOrders.docs,
            totalPages: customersOrders.totalPages,
            currentPage: customersOrders.page,
            hasPrevPage: customersOrders.hasPrevPage,
            hasNextPage: customersOrders.hasNextPage,
            prevPage: customersOrders.prevPage,
            nextPage: customersOrders.nextPage
        }
    )
}

export default ManageOrderRecordsCtrl;
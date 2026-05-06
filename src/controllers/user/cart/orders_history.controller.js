import medicineRecordsArray from "../../../utils/medicines/records.js";
import OrderCollection from "../../../models/order.model.js";

const OrdersHistoryCtrl = async ( req, res, next ) => {

    const customerId = req.session.userLoginSession.userId;
    const medicineRecords = await medicineRecordsArray();

    const customerOrders = await OrderCollection.find( { customerId } ).sort( { createdAt: -1 } );

    res.render(
        "user/ordersHistory",
        {
            customerOrders,
            medicineRecords,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: customerId
        }
    );
}

export default OrdersHistoryCtrl;
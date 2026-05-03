import medicineRecordsArray from "../../../utils/medicines/records.js";

const OrderConfirmationCtrl = async ( req, res, next ) => {

    const medicineRecords = await medicineRecordsArray();
    const customerName = req.session.userLoginSession.userName;
    const customerId = req.session.userLoginSession.userId;

    res.render(
        "user/confirmOrder",
        {
            medicineRecords,
            nameOfLoggedInUser: customerName,
            loggedInUserId: customerId
        }
    );
}

export default OrderConfirmationCtrl;
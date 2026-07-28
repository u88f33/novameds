import medicineRecordsArray from "../../../../utils/medicines/records.js";
import OrderCollection from "../../../../models/order.model.js";

const paymentSuccessCtrl = async ( req, res, next ) => {
    
    const medicineRecords = await medicineRecordsArray();
    const customerName = req.session.userLoginSession.userName;
    const customerId = req.session.userLoginSession.userId;

    const customerOrder = await OrderCollection.findById( req.params.id )
    .populate( "customerId" );
    
    res.render(
        "user/paymentSuccess",
        {
            customerOrder,
            medicineRecords,
            nameOfLoggedInUser: customerName,
            loggedInUserId: customerId
        }
    )
}

export default paymentSuccessCtrl;
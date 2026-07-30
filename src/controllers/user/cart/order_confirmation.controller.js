import medicineRecordsArray from "../../../utils/medicines/records.js";
import OrderCollection from "../../../models/order.model.js";

const OrderConfirmationCtrl = async ( req, res, next ) => {

    try {

        const medicineRecords = await medicineRecordsArray();
        const customerName = req.session.userLoginSession.userName;
        const customerId = req.session.userLoginSession.userId;

        const customerOrder = await OrderCollection.findById( req.params.id )
        .populate( "customerId" );

        res.render(
            "user/confirmOrder",
            {
                customerOrder,
                medicineRecords,
                nameOfLoggedInUser: customerName,
                loggedInUserId: customerId
            }
        );

    } catch ( err ) {

        console.log( 
            "/src/controllers/user/cart/order_confirmation.controller.js" 
        );
        console.log( `Error: ${ err }` );

    }

}

export default OrderConfirmationCtrl;
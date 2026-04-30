import medicineRecordsArray from "../../../../utils/medicines/records.js";
import OrderCollection from "../../../../models/order.model.js";

const GenerateInvoiceCtrl = async ( req, res, next ) => {

    const confirmedOrderDetails = await OrderCollection.findById( req.params.id )
    .populate( "items.medicineId" );

    const customerId = req.session.userLoginSession.userId;
    const medicineRecords = await medicineRecordsArray();

    const customerOrders = await OrderCollection.find( { customerId } ).sort( { createdAt: -1 } );


    res.render(
        "user/invoice",
        {
            confirmedOrderDetails,
            customerOrders,
            medicineRecords,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: customerId,
            totalAmount: confirmedOrderDetails.totalAmount,
            orderStatus: confirmedOrderDetails.orderStatus
        }
    );
}

export default GenerateInvoiceCtrl;
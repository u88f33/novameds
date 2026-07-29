import medicineRecordsArray from "../../../../utils/medicines/records.js";

const paymentSuccessCtrl = async ( req, res, next ) => {

        const medicineRecords = await medicineRecordsArray();
        const customerName = req.session.userLoginSession.userName;
        const customerId = req.session.userLoginSession.userId;

    try {
        res.render(
            "user/paymentSuccess",
            {
                medicineRecords,
                nameOfLoggedInUser: customerName,
                loggedInUserId: customerId
            }
        )
    } catch ( err ) {
        console.log( "Error in /controllers/user/cart/payment/payment_success.controller.js" );
        console.log( "-------------------------------------------" );
        console.log( err );
        console.log( "-------------------------------------------" );
    }

}

export default paymentSuccessCtrl;
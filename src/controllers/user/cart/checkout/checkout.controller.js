import mongoose from "mongoose";
import medicineRecordsArray from "../../../../utils/medicines/records.js"
import cartRecordsArray from "../../../../utils/cart/record.js"
import generateSafepayUrl from "../../../../utils/safepay/safepay.js";
import OrderCollection from "../../../../models/order.model.js";


const CartPageCtrl = async ( req, res, next ) => {
    const customerId = req.session.userLoginSession.userId;
    const medicineRecords = await medicineRecordsArray();
    const cartRecords = await cartRecordsArray( customerId );
    const emptyCartMsg = req.query.emptyCartMsg || "";

    let totalCartItems = cartRecords.length;
    let totalAmount = 0;

    for ( let i = 0; i < totalCartItems; ++i ) {
        totalAmount += cartRecords[i].price;
    }

    const shippingInfoErrors = req.session.shippingInfoErrors || [];

    const temporaryOrderId = new mongoose.Types.ObjectId();
    console.log( temporaryOrderId );


    // Generate Safepay URL to show on checkout page
    const safepayRedirectUrl = await generateSafepayUrl(
        (totalAmount + 300),
        'PKR',
        temporaryOrderId._id.toString(),
        "https://novameds.de/profile/cart/checkout/paymentSuccessfull",
        "https://novameds.de/profile/cart/checkout/?paymentError=Payment is Cancelled"
    );

    req.session.safepayUrl = safepayRedirectUrl;


    res.render(
        "user/checkout",
        {
            medicineRecords,
            cartRecords,
            totalCartItems,
            totalAmount,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: customerId,
            emptyCartMsg,
            paymentSuccess: req.query.paymentSuccess || "",
            paymentError: req.query.paymentError || "",
            shippingInfoErrors
        }
    );
}

export default CartPageCtrl;
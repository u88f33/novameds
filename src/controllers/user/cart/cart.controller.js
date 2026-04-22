import medicineRecordsArray from "../../../utils/medicines/records.js"
import cartRecordsArray from "../../../utils/cart/record.js"


const CartPageCtrl = async ( req, res, next ) => {
    const customerId = req.session.userLoginSession.userId;
    const medicineRecords = await medicineRecordsArray();
    const cartRecords = await cartRecordsArray( customerId );

    let totalCartItems = cartRecords.length;
    let totalAmount = 0;

    for ( let i = 0; i < totalCartItems; ++i ) {
        totalAmount += cartRecords[i].price;
    }

    res.render(
        "user/cart",
        {
            medicineRecords,
            cartRecords,
            totalCartItems,
            totalAmount,
            nameOfLoggedInUser: req.session.userLoginSession.userName,
            loggedInUserId: customerId
        }
    );
}

export default CartPageCtrl;
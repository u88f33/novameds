import medicineRecordsArray from "../../utils/medicines/records.js"

const CartPageCtrl = async ( req, res, next ) => {
    const medicineRecords = await medicineRecordsArray();

    res.render(
        "user/cart",
        {
            medicineRecords
        }
    );
}

export default CartPageCtrl;
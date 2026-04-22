import CartCollection from "../../models/cart.model.js";

async function cartRecordsArray( customerId = "" ) {
    const cartRecords = await CartCollection.find( { customerId } )
    .populate("medicineId")
    .populate( "customerId" );

    return cartRecords;
}

export default cartRecordsArray;
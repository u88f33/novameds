import CartCollection from "../../models/cart.model.js";

async function cartRecordsArray( customerId = "" ) {

    try {

        const cartRecords = await CartCollection.find( { customerId } )
        .populate("medicineId")
        .populate( "customerId" );

        return cartRecords;

    } catch ( err ) {

        console.log( '/src/utils/cart/record.js' );
        console.log( err );

    }

}

export default cartRecordsArray;
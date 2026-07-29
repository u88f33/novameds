import medicineRecordsArray from "../../../../../../utils/medicines/records.js";
import OrderCollection from "../../../../../../models/order.model.js";
import CartCollection from "../../../../../../models/cart.model.js";
import MedicineCollection from "../../../../../../models/medicines.model.js";
import generateInvoice from "../../../../../../utils/invoice/pdfGenerator.js";
import { newOrder } from "../../checkout.controller.js";

const GenerateOrderOnCardPayment = async ( req, res, next ) => {
    
    try {

        const {
            permanentAddress,
            shippingAddress
        } = req.body;

        const medicineRecords = await medicineRecordsArray();
        const customerName = req.session.userLoginSession.userName;
        const customerId = req.session.userLoginSession.userId;

        const items = await CartCollection.find( 
            { customerId },
            {
                _id: 0,
                medicineId: 1,
                price: 1,
                quantity: 1
            }
        );

        let totalItems = items.length;
        
        /**
         * Iterate throught the "items" array containing cart items and Update
         * the medicine stock in the Database
         */
        for ( let i = 0; i < totalItems; ++i ) {
            // Fetch the medicine by its _id.
            let medicineDetails = 
            await MedicineCollection.findById( items[i].medicineId );

            // Update the Medicines stock in the database.
            let updatedStock = medicineDetails.medicineStock - items[i].quantity;
            
            // Update stock on Confirming Order by Customer.
            if ( medicineDetails ) {
                await MedicineCollection.updateOne(
                    { _id: items[i].medicineId },
                    {
                        $set: { medicineStock: updatedStock }
                    }
                )
            }
        }

        if ( totalItems <= 0 ) {
            return res.redirect( '/profile/cart/checkout/?emptyCartMsg=Cart is Empty' );
        }

        let totalAmount = 0;
        for ( let i = 0; i < totalItems; ++i ) {
            totalAmount += items[i].price;
        }

        const shipping_address = {
            address: shippingAddress.address,
            city: shippingAddress.city,
            country: shippingAddress.country,
            phone: shippingAddress.phone
        }

        const permanent_address = {
            address: permanentAddress.address,
            city: permanentAddress.city,
            country: permanentAddress.country,
            phone: permanentAddress.phone
        }

        
        let deliveryCharges = 300;
        totalAmount = totalAmount + deliveryCharges;
        
        newOrder.customerId = customerId;
        newOrder.items = items;
        newOrder.shippingAddress = shipping_address;
        newOrder.permanentAddress = permanent_address;
        newOrder.orderStatus = "Pending";
        newOrder.paymentMethod = "Safepay";
        newOrder.paymentStatus = "Unpaid"
        newOrder.totalAmount = totalAmount


        const insertDataInMongoDB = await newOrder.save();


        const confirmedOrderDetails = await OrderCollection.findById(
            insertDataInMongoDB._id
        ).populate( "customerId" ).populate( "items.medicineId" );

        if ( insertDataInMongoDB ) {
            
            const deleteCustomerCartItems = await CartCollection.deleteMany( { 
                customerId
            } );
            
            const orderId = insertDataInMongoDB._id;
            const orderDetails = confirmedOrderDetails;


            generateInvoice( orderId, res, orderDetails );
        }


    } catch ( err ) {
        console.log( "--------------- Card Address ------------------" );
        console.log( err );
        console.log( "--------------- Card Address ------------------" );
    }

}

export default GenerateOrderOnCardPayment;
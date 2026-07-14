import CartCollection from "../../../../models/cart.model.js";
import OrderCollection from "../../../../models/order.model.js";
import MedicineCollection from "../../../../models/medicines.model.js";
import PDFDocument from "pdfkit";
import generateInvoice from "../../../../utils/invoice/pdfGenerator.js";
import path from "path";
import fs from "fs";
import { validationResult } from 'express-validator';

const CheckoutPageCtrlPost = async ( req, res, next ) => {
    try {

        let errors = validationResult( req );

        if ( !errors.isEmpty() ) {
            req.session.shippingInfoErrors = errors.errors;
            return res.redirect("/profile/cart/checkout");
        }

        const {
            payment_method,
            perm_address,
            perm_city,
            perm_state,
            perm_phone,
            ship_address,
            ship_city,
            ship_state,
            ship_phone
        } = req.body;
        
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

        
        const permanentAddress = {
            address: perm_address,
            city: perm_city,
            country: perm_state,
            phoneNumber: perm_phone
        }
        
        const shippingAddress = {
            address: ship_address,
            city: ship_city,
            country: ship_state,
            phoneNumber: ship_phone
        }

        if ( totalItems <= 0 ) {
           return res.redirect( '/profile/cart/checkout/?emptyCartMsg=Cart is Empty' );
        }

        let totalAmount = 0;
        for ( let i = 0; i < totalItems; ++i ) {
            totalAmount += items[i].price;
        }

        let deliveryCharges = 300;
        totalAmount = totalAmount + deliveryCharges;

        const orderData = {
            customerId,
            items,
            permanentAddress,
            shippingAddress,
            paymentMethod: payment_method,
            orderStatus: "Pending",
            totalAmount        
        };

        const insertDataInMongoDB = await OrderCollection.insertOne( orderData );

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

       res.redirect( `/profile/cart/order/confirm/${ confirmedOrderDetails._id }` );

    } catch ( error ) {
        console.log( "File: /src/controllers/user/cart/checkout/checkout_post.controller.js" );
        console.log( `Error: ${ error }` );
    }
}

export default CheckoutPageCtrlPost;
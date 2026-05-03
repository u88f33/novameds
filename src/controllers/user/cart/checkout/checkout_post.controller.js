import CartCollection from "../../../../models/cart.model.js";
import OrderCollection from "../../../../models/order.model.js";
import MedicineCollection from "../../../../models/medicines.model.js";
import PDFDocument from "pdfkit";
import path from "path";
import fs from "fs";

const CheckoutPageCtrlPost = async ( req, res, next ) => {
    try {
        const {
            payment_method,
            perm_address,
            perm_city,
            perm_state,
            perm_postal,
            ship_address,
            ship_city,
            ship_state,
            ship_postal
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
            postalCode: perm_postal
        }
        
        const shippingAddress = {
            address: ship_address,
            city: ship_city,
            country: ship_state,
            postalCode: ship_postal
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

            // 3. File Path
            const invoiceName = `order_${orderId}.pdf`;
            const invoicePath = path.join(
                "public",
                "assets",
                "invoices",
                invoiceName
            );

            // 4. Create PDF
            const doc = new PDFDocument();

            // Save file
            const writeStream = fs.createWriteStream(invoicePath);
            doc.pipe(writeStream);

            // Also send to browser
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader(
                "Content-Disposition",
                `inline; filename="${invoiceName}"`
            );
            doc.pipe(res);



            doc.fontSize(20).text("Invoice", { align: "center" });
            doc.moveDown();

            doc.fontSize(12).text(`Order ID: ${confirmedOrderDetails._id}`);
            doc.text(`Customer Name: ${confirmedOrderDetails.customerId.customerName}`);
            doc.text(`Total Amount: Rs ${confirmedOrderDetails.totalAmount}`);
            doc.text(`Order Status: ${confirmedOrderDetails.orderStatus}`);
            doc.moveDown();

            doc.text(
                `Shipping Address: ${confirmedOrderDetails.shippingAddress.address}`
            );
            doc.text(`City: ${confirmedOrderDetails.shippingAddress.city}`);
            doc.text(`Country: ${confirmedOrderDetails.shippingAddress.country}`);
            doc.moveDown();

            // Table Header
            doc.fontSize(14).text("Ordered Medicines:");
            doc.moveDown();

            confirmedOrderDetails.items.forEach((item, index) => {
                doc.fontSize(12).text(
                    `${index + 1}. ${item.medicineId.medicineName} (Qty: ${item.quantity}) ---------------------------------------- Price: Rs ${item.price}`
                );
            });

            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.fontSize(20).text(`Total: Rs ${confirmedOrderDetails.totalAmount}`, {
                align: "right",
            });

            doc.end();
        }

       res.redirect( `/profile/cart/order/confirm` );

    } catch ( error ) {
        console.log( "File: /src/controllers/user/cart/checkout/checkout_post.controller.js" );
        console.log( `Error: ${ error }` );
    }
}

export default CheckoutPageCtrlPost;
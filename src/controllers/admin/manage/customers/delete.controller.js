import { fileURLToPath } from "url";
import CustomerCollections from "../../../../models/customers.model.js";
import OrdersCollections from "../../../../models/order.model.js";
import MedicinesCollection from "../../../../models/medicines.model.js";
import fs from "fs";
import path from "path";

const DeleteCustomerRecordCtrl = async ( req, res, next ) => {
    
    try {
        const customerId = req.params.id;

        let getAllOrdersByCustomer = await OrdersCollections.find( { customerId } );

        const deleteCustomerRecord = 
        await CustomerCollections.findByIdAndDelete( customerId );

        /*
            When a record of Customer is deleted. All the invoices related to 
            his/her order must also be deleted.
        */

        let __filename__ = fileURLToPath( import.meta.url );
        let rootDir = path.resolve( __filename__, "../../../../../../" );

        let invoicesPath = path.join(
            rootDir,
            "public",
            "assets",
            "invoices"
        );


        for ( let i = 0; i < getAllOrdersByCustomer.length; ++i ) {

            /*
             * When a Customer record is deleted, all the medicines in all of his
             * orders are added back in the Medicines stock.
             */
            for ( let item of getAllOrdersByCustomer[i].items ){
                console.log( "------------------------------------------" );
                console.log( item );

                let singleMedicineRecord = 
                await MedicinesCollection.findByIdAndUpdate(
                    item.medicineId,
                    { $inc: { medicineStock: item.quantity } },
                    { returnDocument: "after" }
                );
                console.log( singleMedicineRecord ); 
                console.log( "------------------------------------------" );
            }

            let invoice = path.join(
                invoicesPath, `order_${getAllOrdersByCustomer[i]._id}.pdf`
            );
            
            fs.unlink( invoice, ( err ) => {
                if ( err ) {
                    console.log( `Error while deleting customer invoices` );
                    console.log( `Error: ${ err }` );
                }
            } );
        }

        /* 
            After deleting invoices,When an Admin deletes a Customer
            Record, delete all his/her orders also. 
        */
        const deletedCustomerOrders =
        await OrdersCollections.deleteMany( { customerId } );


        res.redirect( "/admin/manage/customers" );

    } catch ( error ) {
        console.log( `Error: ${ error }` );
        res.redirect( "/admin/manage/customers" );
    }

}

export default DeleteCustomerRecordCtrl;
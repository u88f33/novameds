import OrdersCollection from "../../../../models/order.model.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const DeleteOrderRecordsCtrl = async ( req, res, next ) => {
    
    try {
        const orderId = req.params.id;

        const deleteOrder = await OrdersCollection.findByIdAndDelete( orderId );

        const __filename__ = fileURLToPath( import.meta.url );
        const rootDir = path.resolve( __filename__, "../../../../../../" );

        const filePath = path.join( 
            rootDir, 
            "public", 
            "assets",
            "invoices",
            `order_${orderId}.pdf` 
        )

        fs.unlink( filePath, ( err ) => {
            if ( err ) {
                console.log( `Error While deleting Order invoice` );
                console.log( `Error: ${err}` );
                return;
            }
        } );

        res.redirect( `/admin/manage/orders` );

    } catch ( error ) {

        const orderId = req.params.id;
        console.log( "src/controllers/admin/manage/orders/delete.controller.js" );
        console.log( `Error: ${ error }` );
        res.redirect(`/admin/manage/orders/view/${req.params.id}`);

    }

}

export default DeleteOrderRecordsCtrl;
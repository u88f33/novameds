import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import generateInvoice from "../../../../../utils/invoice/pdfGenerator.js";
import OrderCollection from
"../../../../../models/order.model.js";

const UpdateOrderStatusCtrl = async ( req, res, next ) => {
    
    try {

        const {
            order_status
        } = req.body

        const updatedOrderStatus = await OrderCollection.findByIdAndUpdate(
            req.params.id,
            { orderStatus: order_status },
            { returnDocument: "after" }
        );

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const rootDir = path.resolve( __dirname, "../../../../../../" );

        const filePath = path.join( 
                            rootDir, 
                            "public", 
                            "assets", 
                            "invoices",
                            `order_${updatedOrderStatus._id}.pdf`
                        );
        
        let orderId = updatedOrderStatus._id;
        let orderDetails = updatedOrderStatus;
        
        if ( fs.existsSync( filePath ) ) {
            fs.unlinkSync( filePath );
        }
                
        generateInvoice( orderId, res, orderDetails );
        res.redirect( `/admin/manage/orders/view/${req.params.id}` );

    } catch ( error ) {

        console.log( "/src/controllers/admin/manage/orders/update/order_update.controller.js" );
        console.log( `Error: ${ error }` );

    }

}

export default UpdateOrderStatusCtrl;
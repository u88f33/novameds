import OrderCollection from "../../../../../models/order.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import generateInvoice from "../../../../../utils/invoice/pdfGenerator.js";

const UpdatePaymentStatusCtrl = async ( req, res, next ) => {

    try {
        const {
            payment_status
        } = req.body;

        const updatedPayment = await OrderCollection.findByIdAndUpdate(
            req.params.id,
            { paymentStatus: payment_status },
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
                            `order_${updatedPayment._id}.pdf`
                        );
        
        let orderId = updatedPayment._id;
        let orderDetails = updatedPayment;
        
        if ( fs.existsSync( filePath ) ) {
            fs.unlinkSync( filePath );
        }
                
        generateInvoice( orderId, res, orderDetails );

        res.redirect( `/admin/manage/orders/view/${req.params.id}` );
        
    } catch ( error ) {
        console.log( "/src/controllers/admin/manage/orders/update/payment_update.controller.js" );
        console.log( `Error: ${ error }` );
    }

}

export default UpdatePaymentStatusCtrl;
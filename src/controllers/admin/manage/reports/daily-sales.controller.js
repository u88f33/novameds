import { fileURLToPath } from "url";
import OrderCollection from "../../../../models/order.model.js";
import generatePDF from "../../../../utils/salesReport/generatePdf.js";
import path from "path";
import fs from "fs";

const DailySalesReportCtrl = async ( req, res, next ) => {

    const customersOrders = await OrderCollection.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: "$createdAt"
                    }
                }
            }
        }
    ]);

    const __filename__ = fileURLToPath( import.meta.url );
    const rooDir = path.resolve( __filename__, "../../../../../../" );


    const readSalesReportFiles = path.join( 
        rooDir, 
        "public", 
        "assets", 
        "reports", 
        "dailySales" 
    );

    const pdfSalesReportsArray = fs.readdirSync( readSalesReportFiles );

    let startingDate, endingDate;
    let datesOfSalesReport = [];

    let date;
    customersOrders.forEach( doc => {
        date = doc._id;
        datesOfSalesReport.push( new Date(date) );

        startingDate = new Date( date );
        endingDate = new Date( date );
        endingDate.setDate( endingDate.getDate() + 1 );

        generatePDF( startingDate, endingDate );
    } );

    datesOfSalesReport = datesOfSalesReport.sort( ( a, b ) => a - b );
    

    res.render(
        "admin/manage/reports/dailySales",
        {
            pdfSalesReportsArray,
            datesOfSalesReport
        }
    )
}

export default DailySalesReportCtrl;
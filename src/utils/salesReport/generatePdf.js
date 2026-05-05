import getDailySales from './getDailySales.js';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from 'url';
import path from "path";
import fs from "fs";

async function generatePDF() {

    const startDate = new Date("May 4, 2026");
    startDate.setHours( 0, 0, 0 );

    const endDate = new Date( "May 6, 2026" );
    endDate.setHours( 0, 0, 0 );

    const dailySale = await getDailySales( startDate, endDate );
    
    const doc = new PDFDocument();

    const __filename__ = fileURLToPath( import.meta.url );
    const __dirname__ = path.resolve(__filename__, "../../../../"); 

    const salesReportsDirectory = path.join( 
        __dirname__, 
        "public", 
        "assets", 
        "reports", 
        "dailySales",
        "dailySalesReport.pdf"
    );

    doc.pipe( fs.createWriteStream( salesReportsDirectory ) );

    doc
    .text( `Sales Report of ${ new Date( dailySale[0].date ).toLocaleString("en-US") }` )


    doc.moveDown();
    doc.moveDown();

    const dailySalesTable = [
        [   
            'Date', 
            'Name', 
            'Unit Price', 
            'Quantity', 
            "Total Sales", 
            "Available Stock"
        ],
    ];

    dailySale.forEach( data => {
            let tableRow = [
                new Date( data.date ).toLocaleDateString("en-US"),
                data.medicineName,
                data.unitPrice,
                data.totalQuantity,
                data.totalSales,
                data.availableStock
            ];

            dailySalesTable.push( tableRow );
        });

        doc.table({
            data: dailySalesTable
        })


        doc.end();
    // console.log( salesReportsDirectory );

}

export default generatePDF;
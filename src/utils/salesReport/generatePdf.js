import getDailySales from './getDailySales.js';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from 'url';
import path from "path";
import fs from "fs";

function formatDate( date ) {
    let monthNamesArray =  [
                            "January", "February", "March", "April", 
                            "May", "June", "July", "August", "September", 
                            "October", "November", "December"
                        ];

    let day = date.getDate().toString().padStart( 2, "0" );
    let month = monthNamesArray[ date.getMonth() ];
    let year = date.getFullYear().toString().padStart( 5, "0" );

    return `${month}${day}${year}`;
}

async function generatePDF( startingDate, endingDate, response ) {

    let monthNamesArray =  [
                            "January", "February", "March", "April", 
                            "May", "June", "July", "August", "September", 
                            "October", "November", "December"
                        ];

    const startDate = startingDate;
    startDate.setHours( 0, 0, 0 );

    const endDate = endingDate;
    endDate.setHours( 0, 0, 0 );

    const dailySale = await getDailySales( startDate, endDate );
    
    const doc = new PDFDocument();

    const __filename__ = fileURLToPath( import.meta.url );
    const __dirname__ = path.resolve(__filename__, "../../../../"); 

    const salesReportName = `${formatDate( startDate )}.pdf`;
    const salesReportsDirectory = path.join( 
        __dirname__, 
        "public", 
        "assets", 
        "reports", 
        "dailySales",
        `${ salesReportName }`
    );

    doc.pipe( fs.createWriteStream( salesReportsDirectory ) );

    doc.moveDown();
    doc.moveDown();

    const dailySalesTable = [
        [
            { 
               text: `Sales Report of ${monthNamesArray[startDate.getMonth()]} ${ startDate.getDate() }, ${startDate.getFullYear()}`,
               colSpan: "6",
               padding: "1.3em",
               align: { x: "center", y: "center" }
            }
        ],
        [   
            { 
                text: 'Date',
                textColor: '#fff', 
                backgroundColor: "#444",
                align: { x: "center", y: "center" },
                padding: "1em"
            }, 
            { 
                text: 'Name',
                textColor: '#fff', 
                backgroundColor: "#444",
                align: { x: "center", y: "center" },
                padding: "1em"
            }, 
            { 
                text: 'Unit Price',
                textColor: '#fff', 
                backgroundColor: "#444",
                align: { x: "center", y: "center" },
                padding: "1em"
            },
            { 
                text: 'Quantity',
                textColor: '#fff', 
                backgroundColor: "#444",
                align: { x: "center", y: "center" },
                padding: "1em"
            },
            { 
                text: "Total Sales",
                textColor: '#fff', 
                backgroundColor: "#444",
                align: { x: "center", y: "center" },
                padding: "1em"
            },
            { 
                text: "Available Stock",
                textColor: '#fff', 
                backgroundColor: "#444",
                align: { x: "center", y: "center" },
                padding: "1em"
            },
        ],
    ];

    dailySale.forEach( data => {
            let tableRow = [
                { 
                    text: `${new Date( data.date ).toLocaleDateString("en-US")}`,
                    textColor: '#000',
                    align: { x: "center", y: "center" },
                    padding: "1em"
                },
                { 
                    text: data.medicineName,
                    textColor: '#000',
                    align: { x: "center", y: "center" },
                    padding: "1em"
                },
                { 
                    text: data.unitPrice,
                    textColor: '#000',
                    align: { x: "center", y: "center" },
                    padding: "1em"
                },
                { 
                    text: data.totalQuantity,
                    textColor: '#000',
                    align: { x: "center", y: "center" },
                    padding: "1em"
                },
                { 
                    text: data.totalSales,
                    textColor: '#000',
                    align: { x: "center", y: "center" },
                    padding: "1em"
                },
                { 
                    text: data.availableStock,
                    textColor: '#000',
                    align: { x: "center", y: "center" },
                    padding: "1em"
                }
            ];

            dailySalesTable.push( tableRow );
        });

        doc.table({
            data: dailySalesTable
        })


        doc.end();

}

export default generatePDF;
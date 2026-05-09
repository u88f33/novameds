import PDFDocument from 'pdfkit';
import MedicinesCollection from '../../../../models/medicines.model.js';
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

const StockAvailablityReportPdfCtrl = async ( req, res, next ) => {
    
    const medicinesRecords = await MedicinesCollection.aggregate([
        {
            $project: {
                _id: 0,
                medicineName: 1,
                medicineStock: 1,
                medicinePrice: 1,
                totalPrice: {
                    $multiply: [ "$medicineStock", "$medicinePrice" ]
                }
            }
        }
    ]);

    let date = new Date();
    let monthNames = ["January", "February", "March", "April", 
        "May", "June", "July", "August", "September", "October", 
        "November", "December"]

    let medicinesStocksArray = [
        [
            {
                text: `Medicine Availability Report of ${monthNames[ date.getMonth() ]} ${date.getDate()}, ${date.getFullYear()}`,
                colSpan: "4",
                padding: "1em",
                align: { x: "center", y: "center" }
            },        
        ],
        [
            {
                text: `Total Available Medicines: ${ medicinesRecords.length }`,
                colSpan: "4",
                padding: "1em",
                align: { x: "center", y: "center" }
            }
        ],
        [
            {
                text: "Medicine Name",
                backgroundColor: "#777",
                textColor: "#fff",
                padding: "1em",
                align: { x: "center", y: "center" }
            },
            {
                text: "Available Stock",
                backgroundColor: "#777",
                textColor: "#fff",
                padding: "1em",
                align: { x: "center", y: "center" }
            },
            {
                text: "Unit Price",
                backgroundColor: "#777",
                textColor: "#fff",
                padding: "1em",
                align: { x: "center", y: "center" }
            },
            {
                text: "Total Price",
                backgroundColor: "#777",
                textColor: "#fff",
                padding: "1em",
                align: { x: "center", y: "center" }
            }
        ]
    ];

    medicinesRecords.forEach( (singleMedicineRecord, idx) => {
        let individualRecordObjectToArray = [
            {
                text: singleMedicineRecord.medicineName,
                padding: "0.7em",
                align: { x: "center", y: "center" }
            },
            {
                text: singleMedicineRecord.medicineStock,
                padding: "0.7em",
                align: { x: "center", y: "center" }
            },
            {
                text: singleMedicineRecord.medicinePrice,
                padding: "0.7em",
                align: { x: "center", y: "center" }
            },
            {
                text: singleMedicineRecord.totalPrice,
                padding: "0.7em",
                align: { x: "center", y: "center" }
            }
        ];
        
        medicinesStocksArray.push( individualRecordObjectToArray );
    } )

    console.log( medicinesStocksArray );

    let doc = new PDFDocument();

    let __filename__ = fileURLToPath( import.meta.url );
    let rootDir = path.resolve( __filename__, "../../../../../../" );

    const fileName = `medicineStocks.pdf`;
    const filePath = path.join( 
        rootDir, 
        "public", 
        "assets", 
        "reports", 
        "availableStock",
        `${fileName}`
    );

    doc.pipe( fs.createWriteStream( filePath ) );

    res.setHeader( "Content-Type", "application/pdf" );
    res.setHeader(
        "Content-Disposition",
        `inline; filename=${fileName}`
    );
    doc.pipe( res );

    doc.table({
        data: medicinesStocksArray
    })

    doc.end();

}

export default StockAvailablityReportPdfCtrl;
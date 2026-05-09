import path from "path";
import fs from "fs";
import PDFDocument from "pdfkit";

function generateInvoice(orderId, response, orderDetails) {
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

            doc.lineGap(8);

            // Save file
            const writeStream = fs.createWriteStream(invoicePath);
            doc.pipe(writeStream);

            // Also send to browser
            response.setHeader("Content-Type", "application/pdf");
            response.setHeader(
                "Content-Disposition",
                `inline; filename="${invoiceName}"`
            );
            doc.pipe(response);


            const imagePath = path.resolve( invoicePath, "../../logo/Logo.png" );
            doc.fontSize(24).text("Invoice", { align: "left" });
            doc.image(imagePath, {width: 100, align: "right", valign: "top"});
            doc.moveDown();

            doc.fontSize(12).text(`Order ID: ${orderDetails._id}`);
            doc.text(`Customer Name: ${orderDetails.customerId.customerName}`);
            doc.text(`Total Amount: Rs ${orderDetails.totalAmount}`);
            doc.text(`Order Status: ${orderDetails.orderStatus}`);
            doc.text(`Payment Status: ${orderDetails.paymentStatus}`);
            doc.moveDown();

            doc.font('Helvetica-Bold')
            .text('Shipping Address:');

            doc.font('Helvetica');
            doc.text(
                `Shipping Address: ${orderDetails.shippingAddress.address}`
            );
            doc.text(`City: ${orderDetails.shippingAddress.city}`);
            doc.text(`Country: ${orderDetails.shippingAddress.country}`);
            doc.moveDown();

            doc.font('Helvetica-Bold')
            .text('Ordered Medicines:');

            doc.font('Helvetica');

            orderDetails.items.forEach((item, index) => {
                doc.fontSize(12).text(
                    `${index + 1}. ${item.medicineId.medicineName} (Qty: ${item.quantity}) ---------------------------------------- Price: Rs ${item.price}`
                );
            });

            doc.moveDown();
            doc.fontSize(20).text(`Total: Rs ${orderDetails.totalAmount}`, {
                align: "right",
            });

            doc.end();
}

export default generateInvoice;
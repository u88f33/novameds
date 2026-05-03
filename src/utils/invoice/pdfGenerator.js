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



            doc.fontSize(20).text("Invoice", { align: "center" });
            doc.moveDown();

            doc.fontSize(12).text(`Order ID: ${orderDetails._id}`);
            doc.text(`Customer Name: ${orderDetails.customerId.customerName}`);
            doc.text(`Total Amount: Rs ${orderDetails.totalAmount}`);
            doc.text(`Order Status: ${orderDetails.orderStatus}`);
            doc.text(`Payment Status: ${orderDetails.paymentStatus}`);
            doc.moveDown();

            doc.text(
                `Shipping Address: ${orderDetails.shippingAddress.address}`
            );
            doc.text(`City: ${orderDetails.shippingAddress.city}`);
            doc.text(`Country: ${orderDetails.shippingAddress.country}`);
            doc.moveDown();

            // Table Header
            doc.fontSize(14).text("Ordered Medicines:");
            doc.moveDown();

            orderDetails.items.forEach((item, index) => {
                doc.fontSize(12).text(
                    `${index + 1}. ${item.medicineId.medicineName} (Qty: ${item.quantity}) ---------------------------------------- Price: Rs ${item.price}`
                );
            });

            doc.moveDown();
            doc.moveDown();
            doc.moveDown();
            doc.fontSize(20).text(`Total: Rs ${orderDetails.totalAmount}`, {
                align: "right",
            });

            doc.end();
}

export default generateInvoice;
import PDFDocument from "pdfkit";
import OrderCollection from "../../../../models/order.model.js";
import path from "path";
import fs from "fs";

const InvoicePdfCtrl = async ( req, res, next ) => {
    try {
        const orderId = req.params.id;

        // 1. Get Order
        const confirmedOrderDetails = await OrderCollection.findById(orderId)
        .populate( "customerId" )
        .populate( "items.medicineId" );

        if (!confirmedOrderDetails) {
            return res.status(404).send("Order not found");
        }

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
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
            "Content-Disposition",
            `inline; filename="${invoiceName}"`
        );
        doc.pipe(res);



        doc.fontSize(20).text("Invoice", { align: "center" });
        doc.moveDown();

        doc.fontSize(12).text(`Order ID: ${confirmedOrderDetails._id}`);
        doc.text(`Customer Name: ${confirmedOrderDetails.customerId.customerName}`);
        doc.text(`Total Amount: Rs ${confirmedOrderDetails.totalAmount}`);
        doc.text(`Order Status: ${confirmedOrderDetails.orderStatus}`);
        doc.moveDown();

        doc.text(
            `Shipping Address: ${confirmedOrderDetails.shippingAddress.address}`
        );
        doc.text(`City: ${confirmedOrderDetails.shippingAddress.city}`);
        doc.text(`Country: ${confirmedOrderDetails.shippingAddress.country}`);
        doc.moveDown();

        // Table Header
        doc.fontSize(14).text("Ordered Medicines:");
        doc.moveDown();

        confirmedOrderDetails.items.forEach((item, index) => {
            doc.fontSize(12).text(
                `${index + 1}. ${item.medicineId.medicineName} (Qty: ${item.quantity}) ---------------------------------------- Price: Rs ${item.price}`
            );
        });

        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(20).text(`Total: Rs ${confirmedOrderDetails.totalAmount}`, {
            align: "right",
        });

        doc.end();

    } catch (err) {
        next(err);
    }
}

export default InvoicePdfCtrl;
import OrderCollection from "../../models/order.model.js";

async function getDailySales( start, end ) {
    const dailySalesReport = await OrderCollection.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: start,
                    $lt: end
                }
            }
        },
        {
            $unwind: "$items"
        },
        {
            $project: {
                _id: 0,
                items: 1,
                createdAt: 1
            }
        },
        {
            $group: {
                _id: "$items.medicineId",
                totalQuantity: { $sum: "$items.quantity" },
                totalSales: { $sum: "$items.price" },
                date: { $first: "$createdAt" }
            }
        },
        {
            $lookup: {
                from: "medicines",
                localField: "_id",
                foreignField: "_id",
                as: "medicineDoc"
            }
        },
        {
            $unwind: "$medicineDoc"
        },
        {
            $project: {
                _id: 0,
                medicineName: "$medicineDoc.medicineName",
                unitPrice: "$medicineDoc.medicinePrice",
                availableStock: "$medicineDoc.medicineStock",
                totalQuantity: 1,
                totalSales: 1,
                date: "$date"
            }
        }
    ]);

    return dailySalesReport;
}

export default getDailySales;
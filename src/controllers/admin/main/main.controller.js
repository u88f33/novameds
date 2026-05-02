import SuppliersCollection from "../../../models/suppliers.model.js";
import MedicinesCollection from "../../../models/medicines.model.js";
import CustomersCollection from "../../../models/customers.model.js";
import OrdersCollection from "../../../models/order.model.js";

const AdminMainCtrl = async ( req, res, next ) => {
    
    const totalSupplierRecords = await SuppliersCollection.countDocuments();
    const totalMedicineRecords = await MedicinesCollection.countDocuments();
    const totalCustomerRecords = await CustomersCollection.countDocuments();
    const totalOrderRecords = await OrdersCollection.countDocuments({ orderStatus: "Pending" });

    const recentCustomers = 
    await CustomersCollection.find().sort({ createdAt: -1 }).limit( 4 );

    const recentOrders = 
    await OrdersCollection.find().populate("customerId").sort({ createdAt: -1 }).limit( 10 );

    res.render(
        "admin/main/main",
        {
            totalSupplierRecords,
            totalMedicineRecords,
            totalCustomerRecords,
            totalOrderRecords,
            recentCustomers,
            recentOrders
        }
    )
}

export default AdminMainCtrl;
import mongoose from "mongoose";
import CustomerCollection from "../../../../models/customers.model.js";
import OrdersCollections from "../../../../models/order.model.js";

const ViewCustomerRecordCtrl = async ( req, res, next ) => {

    const singleCustomerRecord = await CustomerCollection.findById( req.params.id );
    const customerOrdersRecordInDB = await OrdersCollections.find(
        { customerId: new mongoose.Types.ObjectId(req.params.id) }
    );

    res.render(
        "admin/manage/customers/view",
        {
            singleCustomerRecord,
            customerOrdersRecordInDB
        }
    )
}

export default ViewCustomerRecordCtrl;
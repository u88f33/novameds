import OrderCollection from "../../../../../models/order.model.js";

const UpdatePaymentStatusCtrl = async ( req, res, next ) => {

    const {
        payment_status
    } = req.body;

    const updatedPayment = await OrderCollection.findByIdAndUpdate(
        req.params.id,
        { paymentStatus: payment_status },
        { returnDocument: "new" }
    );

    res.redirect( `/admin/manage/orders/view/${req.params.id}` );

}

export default UpdatePaymentStatusCtrl;
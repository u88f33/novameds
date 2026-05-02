const UpdatePaymentStatusCtrl = ( req, res, next ) => {
    console.log( req.body );
    res.redirect( `/admin/manage/orders/view/${req.params.id}` );
}

export default UpdatePaymentStatusCtrl;
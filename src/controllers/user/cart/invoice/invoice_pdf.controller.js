const InvoicePdfCtrl = ( req, res, next ) => {
    res.send( `Invoice id: ${ req.params.id }` );
}

export default InvoicePdfCtrl;
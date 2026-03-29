const DeleteOrderRecordsCtrl = ( req, res, next ) => {
    console.log( "-------------------" )
    console.log( `Orders Delete parameter: ${ req.params.id }` );
    console.log( "-------------------" );
    res.redirect( "/admin" );
}

export default DeleteOrderRecordsCtrl;
import MedicineCollection from "../../../models/medicines.model.js";

const LoginGetCtrl = async ( req, res, next ) => {

    try {
        console.log( "**************************************" );
        console.log( "Cookies on Login Page" );
        console.log( "**************************************" );
        console.log( req.cookies );

        const medicineRecords = await MedicineCollection.find();

        res.render( "auth/login",
            { 
                medicineRecords,
                errorMessage: req.query.errorMessage
            }
        );


    } catch ( err ) {

        console.log( "/src/controllers/auth/login/login_get.controller.js" );
        console.log( `Error: ${ err }` );

    }
    
}

export default LoginGetCtrl;
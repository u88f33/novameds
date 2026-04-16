import AdminCollection from "../../../../models/admin.model.js";
import bcrypt from "bcryptjs";


const RegisterAdminCtrl = async ( req, res, next ) => {

    try {

        const insertAdminRecord = new AdminCollection();

        const password = "admin123";
        const hashedPassword = await bcrypt.hash( password, 10 );

        insertAdminRecord.adminName = "Admin";
        insertAdminRecord.adminEmail = "admin@gmail.com";
        insertAdminRecord.adminPassword = hashedPassword;

        console.log( insertAdminRecord );
        await insertAdminRecord.save();
        res.redirect( "/login" );

    } catch ( error ) {
        console.log( "/src/controllers/auth/register/admin/register_get.controller.js" );
        console.log( `Error: ${ error }` );
    }

}

export default RegisterAdminCtrl;
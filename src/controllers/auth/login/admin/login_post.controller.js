import AdminCollection from "../../../../models/admin.model.js";
import bcrypt from "bcryptjs";

const AdminLoginPostCtrl = async ( req, res, next ) => {

    try {

        const {
            admin_email,
            admin_password
        } = req.body;

        const findAdminByEmail = await AdminCollection.findOne({ adminEmail: admin_email });

        if ( !findAdminByEmail ) {
            return res.redirect( '/login/?errorMessage=Admin Email not found!' )
        }

        const compareAdminPassword = await bcrypt.compare( 
            admin_password, findAdminByEmail.adminPassword
        );

        if ( !compareAdminPassword ) {
            return res.redirect( "/login/?errorMessage=Admin Password is incorrect!!!" );
        }

        req.session.adminLoginSession = {
            adminCredentials: findAdminByEmail
        }

        res.redirect( "/admin" );


    } catch ( error ) {
        console.log( "/src/controllers/auth/login/admin/login_post.controller.js" );
        console.log( `Error: ${ error }` );
    }

}

export default AdminLoginPostCtrl;
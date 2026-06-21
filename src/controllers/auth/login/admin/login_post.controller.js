import AdminCollection from "../../../../models/admin.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

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

        const payload = {
            adminId: findAdminByEmail._id,
            role: "Admin"
        }

        const jwt_secret = process.env.JWT_SECRET_KEY || undefined;
        const options = {
            "expiresIn": "1h"
        };

        const token = jwt.sign(
            payload, jwt_secret, options
        );

        res.cookie("adminToken", token, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            secure: false
        });
        

        res.redirect( "/admin" );


    } catch ( error ) {
        console.log( "/src/controllers/auth/login/admin/login_post.controller.js" );
        console.log( `Error: ${ error }` );
    }

}

export default AdminLoginPostCtrl;
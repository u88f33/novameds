import CustomersCollection from "../../../../models/customers.model.js";
import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const UserForgotPasswordCtrlPost = async ( req, res, next ) => {

    try {

        const { user_email } = req.body;

        const findUserByEmail = await CustomersCollection.findOne( 
            { customerEmail: user_email } 
        );

        if ( !findUserByEmail ) {
            return res.redirect( "/user/forgot/?errorMessage=Email not found" );
        }

        // Generate token
        const token = crypto.randomBytes(32).toString("hex");

        findUserByEmail.resetToken = token;
        findUserByEmail.resetTokenExpiry = Date.now() + 3600000; // 1 hour
        
        await findUserByEmail.save();

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: false,
            auth: {
                user: "novameds46@gmail.com",
                pass: "ffojplncvmjdpoil"
            }
        });

        const PORT = process.env.PORT;
        const resetLink = `http://localhost:${PORT}/user/reset/${token}`;

        await transporter.sendMail({
            to: findUserByEmail.customerEmail,
            subject: "Password Reset",
            html: `<h1>Novameds</h1>
                    <p>Click to reset password below:</p>
                <a href="${resetLink}">${resetLink}</a>`
        });

        res.send(
            `<p>Password Reset link is sent to your Email</p>
            <p>Go back to website: <a href='http://localhost:${PORT}/profile'>Click here</a></p>`
        );

    } catch ( error ) {
        console.log( "/src/controllers/auth/forgot_password/user/user_post.controller.js" );
        console.log( `Error: ${ error }` );
    }

}

export default UserForgotPasswordCtrlPost;
import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import dotenv from "dotenv";
const router = express.Router();

dotenv.config();

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {

    // Token implementation for User on Login using "jsonwebtoken"
    const payload = {
        userId: req.user._id,
        role: "User"
    };

    const jwt_secret = process.env.JWT_SECRET_KEY;
    const options = { expiresIn: "1h" };

    const token = jwt.sign(
        payload,
        jwt_secret,
        options
    );

    // Session
    req.session.userLoginSession = {
        userId: req.user._id,
        userName: req.user.customerName
    }

    res.cookie( 
        "userToken", 
        token,
        {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            secure: false,
            path: "/"
        }
    );

    res.redirect('/profile');

} );

export default router;
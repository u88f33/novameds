import express from "express";
import passport from "passport";
const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log( "Redirect to Home" );
    res.redirect('/profile');
});

export default router;
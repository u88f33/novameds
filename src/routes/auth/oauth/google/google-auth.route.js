import express from "express";
import passport from "passport";
const router = express.Router();

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log( "Redirect to Home" );
    res.redirect('/');
});

export default router;
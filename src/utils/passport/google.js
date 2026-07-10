import passport from "passport";
import dotenv from "dotenv";
import CustomersColl from "../../models/customers.model.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK = process.env.GOOGLE_CALLBACK;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log( "---------------------------------------------------" );
    console.log( "GOOGLE STRATEGY" );
    console.log( profile );
    console.log( "---------------------------------------------------" );
    return cb( null, profile );
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
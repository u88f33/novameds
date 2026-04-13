import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import connectDB from "./src/config/database.connection.js";
import Routes from "./src/routes/index.js";

// Initializing Environment variables from ".env" file
dotenv.config();

// Connected to Database on "mongodb://127.0.0.1:27017/novameds"
const MONGO_URI = process.env.MONGO_URI;  // mongodb://127.0.0.1:27017
const DATABASE_NAME = process.env.DATABASE_NAME;  // novameds
connectDB( MONGO_URI, DATABASE_NAME );

const app = express();

// Session Middleware
app.use( session( 
  {
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  }
) )

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set views folder
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Adding icons to a website
app.use("/fa", express.static(
  path.join(process.cwd(), "node_modules/@fortawesome/fontawesome-free")
));

// Middleware for static public folder
app.use( express.static( "./public" ) );

// Middleware for JSON and HTML Form data
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.use( "/", Routes );


const PORT = process.env.PORT;
app.listen( PORT, () => {
    console.log( `Listening to Port# ${PORT}` );
} );
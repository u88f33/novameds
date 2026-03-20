import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import Routes from "./src/routes/index.js";

// Initializing Environment variables from ".env" file
dotenv.config();

const app = express();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set views folder
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Middleware for static public folder
app.use( express.static( "public" ) );

// Middleware for JSON and HTML Form data
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.use( "/", Routes );

const PORT = process.env.PORT;
app.listen( PORT, () => {
    console.log( `Listening to Port# ${PORT}` );
} );
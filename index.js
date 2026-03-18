import express from "express";
import dotenv from "dotenv";

// Initializing Environment variables from ".env" file
dotenv.config();

const app = express();

app.get( "/", ( req, res, next ) => {
    res.send( `<h1 style='color:red;font-size:80px;'>Novameds</h1>` )
} );

const PORT = process.env.PORT;
app.listen( PORT, () => {
    console.log( `Listening to Port# ${PORT}` );
} );
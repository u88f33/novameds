import mongoose from "mongoose";

const connectDB = ( mongoUri, databaseName ) => {
    try {
        mongoose.connect( `${ mongoUri }/${ databaseName }` )
        .then( value => console.log( `Successfully connected to Database: ${mongoUri}/${databaseName}` ) )
        .catch( error => console.log( `Error while connection to Mongo Database: ${ error }` ) );
    } catch ( error ) {
        console.log( `File: /src/config/database.connection.js` );
        console.log( `Error While connection to Mongo Database` );
        console.log( `Error: ${ error }` );
    }
}

export default connectDB;
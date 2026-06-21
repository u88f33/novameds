import MedicinesCollection from "../../models/medicines.model.js";

const medicineRecords = async () => {

    try {

        const medicineRecords = await MedicinesCollection.find();

        return medicineRecords;

    } catch ( err ) {
        console.log( "/src/utils/medicines/record.js" );
        console.log( `Error: ${ err }` );
    }

}

export default medicineRecords;
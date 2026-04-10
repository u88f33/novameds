import MedicinesCollection from "../../models/medicines.model.js";

const medicineRecords = async () => {
    const medicineRecords = await MedicinesCollection.find();

    return medicineRecords;
}

export default medicineRecords;
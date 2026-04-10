import medicineRecordsArray from "../../../utils/medicines/records.js"

const SettingsPageUrl = async ( req, res, next ) => {
    const medicineRecords = await medicineRecordsArray();

    res.render(
        "user/settings",
        {
            medicineRecords
        }
    )
}

export default SettingsPageUrl;
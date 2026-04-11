import CustomerCollections from "../../../../models/customers.model.js";

const ManageCustomerRecordsCtrl = async ( req, res, next ) => {

    const page = req.query.page || 1;
    const limit = req.query.limit || 5

    const CustomerRecordsPaginationInfo = await CustomerCollections.paginate(
        {},
        {
            page,
            limit
        }
    );

    const CustomerRecordsArray = CustomerRecordsPaginationInfo.docs; 
    

    res.render(
        "admin/manage/customers/manage",
        {
            CustomerRecordsArray,
            CustomerRecordsPaginationInfo
        }
    );
}

export default ManageCustomerRecordsCtrl;
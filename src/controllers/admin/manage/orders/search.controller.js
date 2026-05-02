import OrderCollection from "../../../../models/order.model.js"

const searchOrderApiCtrl = async ( req, res, next ) => {

    try {

        const search = req.query.search || "";

        const customersOrders = await OrderCollection.find()
        .populate(
            {
                path: "customerId",
                match: {
                    $or: [
                        {
                            customerName: { $regex: search, $options: "i" }
                        },
                        {
                            customerEmail: { $regex: search, $options: "i" }
                        },
                        {
                            customerPhone: { $regex: search, $options: "i" }
                        }
                    ]
                }
            }
        );

        const filtered = customersOrders.filter(order => order.customerId);

        res.json( filtered );

    } catch ( error ) {

        console.log( `/src/controllers/admin/manage/order/search.controller.js` );
        console.log( `Error: ${ error }` );

    }

}

export default searchOrderApiCtrl;
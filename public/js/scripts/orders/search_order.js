async function searchOrder( inputValue ) {
    try {

    const date = new Date();
    const months = [ 
                    "January", "February", "March", 
                    "April", "May", "June",
                    "July", "August", "September",
                    "October", "November", "December" 
                ];

        const fetchOrder = await fetch( `http://localhost:5050/admin/api/orders/?search=${inputValue}` );
        const response = await fetchOrder.json();

        const ordersTable = document.getElementById( "orderTableBody" );
        ordersTable.innerHTML = "";
        let orderStatusBackgroundClass = "";
        response.forEach(( singleOrder, index ) => {
            
            switch ( singleOrder.orderStatus ) {
                case "Pending": {
                    orderStatusBackgroundClass = "bg-danger text-light";
                    break;
                };
                case "Delivered": {
                    orderStatusBackgroundClass = "bg-success text-light";
                    break;
                };
                case "Cancelled": {
                    orderStatusBackgroundClass = "bg-warning";
                    break;
                }
            }

            ordersTable.innerHTML += `<tr>
                            <td>${ index + 1 }</td>
                            <td>${ singleOrder.customerId.customerName }</td>
                            <td>
                                ${singleOrder.shippingAddress.address}, ${singleOrder.shippingAddress.city}, ${ singleOrder.shippingAddress.country }
                            </td>
                            <td>${ singleOrder.totalAmount }</td>
                            <td class="${orderStatusBackgroundClass}">
                                ${ singleOrder.orderStatus }
                            </td>
                            <td>
                                <div class="dashboard__section-cell-actions">
                                    <a href="/admin/manage/orders/view/${singleOrder._id}" class="action-btn">
                                        View or Manage
                                    </a>
                                </div>
                            </td>
                        </tr>`
        });

        return ordersTable;
    } catch( error ) {
        console.log( "/public/js/scripts/orders/search_order.js" );
        console.log( `Error: ${ error }` );
    }
}
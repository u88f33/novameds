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
        response.forEach(( singleOrder, index ) => {
            ordersTable.innerHTML += `<tr>
                            <td>${ index + 1 }</td>
                            <td>${ singleOrder.customerId.customerName }</td>
                            <td>
                                ${singleOrder.shippingAddress.address}, ${singleOrder.shippingAddress.city}, ${ singleOrder.shippingAddress.country }
                            </td>
                            <td>${ singleOrder.totalAmount }</td>
                            <td>
                                ${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}
                            </td>
                            <td>
                                Pending
                            </td>
                            <td>
                                <div class="dashboard__section-cell-actions">
                                    <a href="/admin/manage/orders/view/order_id_789" class="action-btn">
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
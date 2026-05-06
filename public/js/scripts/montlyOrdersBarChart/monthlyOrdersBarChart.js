/* ================= CHART ================= */

async function getMonthlyOrders() {
    let ordersRecords = await fetch( "/admin/api/orders" );
    let response = await ordersRecords.json();

    let monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 
        'Jun', "July", "Aug", "Sep", 
        "Oct", "Nov", "Dec"
    ];
    
    let ordersGraphData = [];
    
    monthNames.forEach( month => {
        let ordersPerMonth = 0;

        response.forEach( singleOrder => {
            let date = new Date( singleOrder.createdAt );

            if ( month == monthNames[ date.getMonth() ] ) {
                ++ordersPerMonth;
            }

        } )
       
        ordersGraphData.push( ordersPerMonth );
    } );

    return ordersGraphData;
}

let monthlyOrders = await getMonthlyOrders();

const ctx = document.getElementById('ordersChart');

let barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Orders',
            data: monthlyOrders,
            backgroundColor: '#006eb9',
            labelsColor: "#006eb9"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    precision: 0
                }
            }
        }
    }
});

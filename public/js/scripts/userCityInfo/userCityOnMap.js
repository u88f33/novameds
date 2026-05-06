import { cities } from "./userCities.js";


async function fetchCustomerCities() {
    const fetchRecords = await fetch( "/admin/api/customers" );
    const response = await fetchRecords.json();
    
    let customerCities = [];

    cities.forEach( ( city, index ) => {
        response.forEach( (singleRecord, index) => {
            if ( singleRecord.customerCity == city.name ) {
                customerCities.push( city );
            }
        } )
    } )

    return customerCities;
}

let cityInfo = await fetchCustomerCities();

/* ================= MAP ================= */

// Initialize map centered on Pakistan
var map = L.map('map').setView([33.3753, 72.3451], 6);

// Tile layer (styled later)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

// Add markers
cityInfo.forEach(city => {
    L.circleMarker(city.coords, {
        color: "#006eb9",
        fillColor: "#006eb9",
        fillOpacity: 0.4,
        radius: 8
    })
    .addTo(map)
    .bindPopup(city.name);
});

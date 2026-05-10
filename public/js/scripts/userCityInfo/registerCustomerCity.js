import { cities } from "./userCities.js";

let options = ``;
cities.forEach(city => {
    
    let customerCityInDatabase = citySelectedByCustomer || "";

    if ( customerCityInDatabase == city.name ) {
        options += `<option value="${city.name}" selected='selected'>${ city.name }</option>`;
    } else {
        options += `<option value="${city.name}">${ city.name }</option>`;
    }

});


document.getElementById( "user_city" ).innerHTML = options;

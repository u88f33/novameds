import { cities } from "./userCities.js";

let options = ``;
cities.forEach(city => {
    options += `<option value="${city.name}">${ city.name }</option>`;
});


document.getElementById( "user_city" ).innerHTML = options;

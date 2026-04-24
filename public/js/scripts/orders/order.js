const radios = document.querySelectorAll( "input[name='payment_method']" );
const boxes = document.querySelectorAll( ".payment-box__info" );

boxes[0].style.display = "block";

async function fetchCustomerAddress( userId ) {
    const getUserAddress = await fetch( `/apis/api/customer/address/${ userId }` );
    const response = await getUserAddress.json();

    return response;
}

async function fillShippingForm( userId, inputId, inputValue ) {
    const user = await fetchCustomerAddress( userId );

    document.getElementById( inputId ).value = user[inputValue];
}

radios.forEach( radio => {
    radio.addEventListener( "change", () => {
        boxes.forEach( box => {
            
            box.style.display = "none";

            // show selected one
            const selectedBox = document.getElementById(radio.value);
            if (selectedBox) {
                selectedBox.style.display = 'block';
            }

        });
    } )
} );

fillShippingForm( userId, "perm_address", "customerAddress" );
fillShippingForm( userId, "perm_city", "customerCity" );
fillShippingForm( userId, "perm_state", "customerCountry" );

document.getElementById( "same_address" ).addEventListener( "change", function() {
    if ( this.checked ) {
        fillShippingForm( userId, "perm_address", "customerAddress" );
        fillShippingForm( userId, "perm_city", "customerCity" );
        fillShippingForm( userId, "perm_state", "customerCountry" );
    } else {

    }
})
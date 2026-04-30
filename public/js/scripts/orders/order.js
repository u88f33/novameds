const radios = document.querySelectorAll( "input[name='payment_method']" );
const boxes = document.querySelectorAll( ".payment-box__info" );

boxes[0].style.display = "block";

async function fetchCustomerAddress() {
    try {
        const getUserAddress = await fetch( `/apis/api/customer/address` );
        const response = await getUserAddress.json();

        return response;
    } catch ( error ) {
        console.log( "Error: " + error );
    }
}

async function fillShippingAddress( inputId = "", inputValue = "" ) {
    try {

        const user = await fetchCustomerAddress();

        if ( inputValue ) {
            document.getElementById( inputId ).value = user[inputValue];
        } else {
            document.getElementById( inputId ).value = ""
        }

    } catch ( error ) {
        console.log( "Error: " + error );
    }
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

fillShippingAddress( "perm_address", "customerAddress" );
fillShippingAddress( "perm_city", "customerCity" );
fillShippingAddress( "perm_state", "customerCountry" );

document.getElementById( "same_address" ).addEventListener( "change", function() {
    if ( this.checked ) {
        fillShippingAddress( "ship_address", "customerAddress" );
        fillShippingAddress( "ship_city", "customerCity" );
        fillShippingAddress( "ship_state", "customerCountry" );
    } else {
        fillShippingAddress( "ship_address", "" );
        fillShippingAddress( "ship_city", "" );
        fillShippingAddress( "ship_state", "" );   
    }
})
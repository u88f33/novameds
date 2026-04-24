const radios = document.querySelectorAll( "input[name='payment_method']" );
const boxes = document.querySelectorAll( ".payment-box__info" );

boxes[0].style.display = "block";

async function fetchCustomerAddress( userId ) {
    try {
        const getUserAddress = await fetch( `/apis/api/customer/address/${ userId }` );
        const response = await getUserAddress.json();

        return response;
    } catch ( error ) {
        console.log( "Error: " + error );
    }
}

async function fillShippingAddress( userId = "", inputId = "", inputValue = "" ) {
    try {
        const user = await fetchCustomerAddress( userId );

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

fillShippingAddress( userId, "perm_address", "customerAddress" );
fillShippingAddress( userId, "perm_city", "customerCity" );
fillShippingAddress( userId, "perm_state", "customerCountry" );

document.getElementById( "same_address" ).addEventListener( "change", function() {
    if ( this.checked ) {
        fillShippingAddress( userId, "ship_address", "customerAddress" );
        fillShippingAddress( userId, "ship_city", "customerCity" );
        fillShippingAddress( userId, "ship_state", "customerCountry" );
    } else {
        fillShippingAddress( userId, "ship_address", "" );
        fillShippingAddress( userId, "ship_city", "" );
        fillShippingAddress( userId, "ship_state", "" );   
    }
})
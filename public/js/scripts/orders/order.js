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

        const userAddress = await fetchCustomerAddress();

        if ( inputValue ) {
            document.getElementById( inputId ).value = userAddress[inputValue];
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
                if ( radio.value == "Card" ) {
                    document.getElementById( "normalOrderFormSubmit" ).disabled =
                    true;
                } else {
                    document.getElementById( "normalOrderFormSubmit" ).disabled =
                    false;
                }
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

const orderForm = document.getElementById( "confirmOrderForm" );

function targetFormInput( targetId ) {
    return document.getElementById( targetId ).value;
}

orderForm.addEventListener( "submit", async function( event ) {
    const clickedButton = event.submitter;

    if ( clickedButton.id == "payWithCardAndSubmit" ) {
        event.preventDefault();

        const payload = {
            shippingAddress: {
                address: targetFormInput( input_ship_address ),
                city: targetFormInput( input_ship_city ),
                country: targetFormInput( input_ship_country ),
                phone: targetFormInput( input_ship_phone )
            },
            permanentAddress: {
                address: targetFormInput( "perm_address" ),
                city: targetFormInput( "perm_city" ),
                country: targetFormInput( "perm_country" ),
                phone: targetFormInput( "perm_phone" )
            }
        }

        const postCustomerAddress = await fetch(
            "/profile/cart/checkout/card/address",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: payload
            }
        );

        const res = await postCustomerAddress.json();
        console.log( res );

        // window.location.href = safepayUrl;
        return;
    }
    
} )
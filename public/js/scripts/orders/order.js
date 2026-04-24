const radios = document.querySelectorAll( "input[name='payment_method']" );
const boxes = document.querySelectorAll( ".payment-box__info" );

boxes[0].style.display = "block";

async function fetchCustomerAddress( userId ) {
    const getUserAddress = await fetch( `/apis/api/customer/address/${ userId }` );
    const response = await getUserAddress.json();

    console.log( response );
    return response;
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

fetchCustomerAddress( userId );
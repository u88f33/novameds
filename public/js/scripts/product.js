const minusBtn = document.querySelector('.product__btn--minus');
const plusBtn = document.querySelector('.product__btn--plus');
const input = document.querySelector('.product__input');
const cartBtn = document.querySelector('.product__cart-btn');

let quantity = 1;
let inCart = false;

plusBtn.addEventListener('click', () => {
    quantity++;
    input.value = quantity;
});

minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        input.value = quantity;
    }
});

cartBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    inCart = !inCart;
    form = document.getElementById( "postDataToCartForm" );
    postUrl = form.action;

    const medicineId = document.getElementById( "medicineId" ).value;
    const medicineQuantity = document.getElementById( "quantity" ).value;

    console.log( medicineId );
    console.log( medicineQuantity );

    if (inCart) {
        
        try {
            const postCartItemResponse = await fetch( postUrl, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    medicineId,
                    quantity
                })
            } );

            const result = await postCartItemResponse.json();
            console.log( result );

        } catch ( error ) {

        }

    } else {
        cartBtn.textContent = "Remove from Cart";
        cartBtn.classList.add('product__cart-btn--active');
    }
});
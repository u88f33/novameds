const minusBtn = document.querySelector('.product__btn--minus');
const plusBtn = document.querySelector('.product__btn--plus');
const input = document.querySelector('.product__input');
const cartBtn = document.querySelector('.product__cart-btn');

let quantity = 1;
let inCart = false;
let result = null;

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

            result = await postCartItemResponse.json();
            
            
        } catch ( error ) {

            console.log( `Error while Adding Product to Cart: ${ error }` );
            
        }
        
        console.log( "On Add to Cart: ", result );

        // cartBtn.textContent = "Remove from Cart";
        // cartBtn.classList.add('product__cart-btn--active');
        
    } else {
        
        const deleteCartItemResponse =  await fetch( `/profile/cart/delete/${result._id}`, {
            method: 'DELETE',
        } );

        
        result = await deleteCartItemResponse.json();

        console.log( "On Removing from Cart: ", result );
        
        // cartBtn.textContent = "Add to Cart";
        // cartBtn.classList.remove('product__cart-btn--active');

    }
});
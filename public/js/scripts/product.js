const minusBtn = document.querySelector('.product__btn--minus');
const plusBtn = document.querySelector('.product__btn--plus');
const input = document.querySelector('.product__input');
const cartBtn = document.querySelector('.product__cart-btn');

let quantity = 1;
let inCart = false;
let result = null;

async function AlreadyPresentInCart() {
    const userCartItems = await fetch( "/profile/cart/api" );
    const cartItemsArray = await userCartItems.json();

    cartItemsArray.forEach(singleCartItem => {
        if ( medicineId == singleCartItem.medicineId ) {
            cartBtn.classList.add( "product__cart-btn--active" );
            cartBtn.textContent = "Remove from Cart";
        }
    });

    return cartItemsArray;
}

// Is the Medicine baught is already Present in a Cart or not???
AlreadyPresentInCart();

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

    const cartItemsArray = await AlreadyPresentInCart();
    for ( singleCartItem of cartItemsArray ) {
        if ( medicineId == singleCartItem.medicineId ) {
            try {
                console.log( singleCartItem );
                console.log( medicineId );
                console.log( userId );
                const deletedItem = await fetch( `/profile/cart/delete/${ medicineId }`, {
                    method: "DELETE"
                } );

                cartBtn.classList.remove( "product__cart-btn--active" );
                cartBtn.textContent = "Add to Cart";
                
                let response = await deletedItem.json();
                console.log( response );

                inCart = !inCart;
                break;
            } catch ( error ) {
                console.log( `Error while deleting cart Item: ${ error }` );
            }
        }
    }


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
            cartBtn.classList.add( "product__cart-btn--active" );
            cartBtn.textContent = "Remove from Cart";
            inCart = !inCart;
              
        } catch ( error ) {
            console.log( `Error while Adding Product to Cart: ${ error }` );
        }
    }

});




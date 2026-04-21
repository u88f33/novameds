const minusBtn = document.querySelector('.product__btn--minus');
const plusBtn = document.querySelector('.product__btn--plus');
const input = document.querySelector('.product__input');
const cartBtn = document.querySelector('.product__cart-btn');

let quantity = 1;
let inCart = false;
let result = null;
let totalCartItems;
let cartItemsArray = null;

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

/**
 * Is the Medicine is already Present in a Cart than "Add to Cart" changes 
 * to "Remove from Cart" on page reload.
*/
AlreadyPresentInCart();

plusBtn.addEventListener('click', () => {
    quantity++;
    input.value = quantity;

    let newPrice;
    newPrice = Number( quantity ) * Number( medicinePrice )

    document.getElementById( "product-price" ).innerText = newPrice;
});


minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        input.value = quantity;

        let newPrice;
        newPrice = Number( quantity ) * Number( medicinePrice )

        document.getElementById( "product-price" ).innerText = newPrice;
    }
});

cartBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    inCart = !inCart;
    form = document.getElementById( "postDataToCartForm" );
    postUrl = form.action;
    let displayTotalCartItems = document.getElementById( "cart-text" );

    cartItemsArray = await AlreadyPresentInCart();

    for ( singleCartItem of cartItemsArray ) {
        if ( medicineId == singleCartItem.medicineId ) {
            try {
                const deletedItem = await fetch( `/profile/cart/delete/${ medicineId }`, {
                    method: "DELETE"
                } );

                cartBtn.classList.remove( "product__cart-btn--active" );
                cartBtn.textContent = "Add to Cart";
                result = await deletedItem.json();
                
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
    
    cartItemsArray = await AlreadyPresentInCart();
    totalCartItems = cartItemsArray.length;
    displayTotalCartItems.innerText = totalCartItems;

});




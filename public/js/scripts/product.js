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
    let insertResult = null;
    let deleteResult = null;
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

            insertResult = await postCartItemResponse.json();
            
            
        } catch ( error ) {

            console.log( `Error while Adding Product to Cart: ${ error }` );
            
        }
        
        deleteResult = null;
        console.log( "insertResult: ", insertResult );
        console.log( "deleteResult: ", deleteResult );
        
    } else {
        
        const deleteCartItemResponse =  await fetch( `/profile/cart/delete/${insertResult._id}`, {
            method: 'DELETE',
        } );

        
        deleteResult = await deleteCartItemResponse.json();

        insertResult = null;
        console.log( "insertResult: ", insertResult );
        console.log( "deleteResult: ", deleteResult );

    }

    if ( deleteResult ) {
        cartBtn.textContent = "Add to Cart";
        cartBtn.classList.remove('product__cart-btn--active');
    } else if ( insertResult ) {
        cartBtn.textContent = "Remove from Cart";
        cartBtn.classList.add('product__cart-btn--active');
    }
});




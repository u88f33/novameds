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

cartBtn.addEventListener('click', () => {
    inCart = !inCart;

    if (inCart) {
        cartBtn.textContent = "Remove from Cart";
        cartBtn.classList.add('product__cart-btn--active');
    } else {
        cartBtn.textContent = "Add to Cart";
        cartBtn.classList.remove('product__cart-btn--active');
    }
});
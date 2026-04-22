async function deleteItemFromCart( medicineId ) {
    const deleteCartItem = 
    await fetch( `/profile/cart/delete/${ medicineId }`, {
        method: "DELETE"
    } )

    window.location.replace( "/profile/cart" );
}
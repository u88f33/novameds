let timeout;

function showMedicinesList(inputValue) {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        try {

            
            let res = await fetch(`/user/api/medicines/?page=1&search=${inputValue}`);
            let data = await res.json();

            const medicinesListDisplayOnSearch = document.getElementById("medicinesListDisplayOnSearch");
            
            medicinesListDisplayOnSearch.innerHTML = "";

            
            data.forEach((medicineRecord, index) => {
            
                /**
                 * If the Medicine is out of stock then do not show Add to Cart 
                 * button on the right side of search box. Show "Out of Stock"
                 * instead.
                 * */
                let addToCartBtn = ``;
                if ( medicineRecord.medicineStock == 0 ) {
                    addToCartBtn = `<span class='stock'><i class="fa-solid fa-circle-exclamation d-inline-block pe-3"></i>
                    Out of Stock</span>`;
                } else {
                    addToCartBtn = `<a
                                    href="/profile/product/${medicineRecord._id}"
                                    class="medicine-list-item-cart-add__link">
                                    Add to Cart
                                </a>`;
                }

                medicinesListDisplayOnSearch.innerHTML += `
                        <li>
                            <div class="medicine-list-item-info__container">
                                <div class="medicine-list-item__image-container">
                                    <img 
                                        src="/uploads/medicines/${medicineRecord.medicineImage}"
                                        class="medicine-list-item__image"
                                    />
                                </div>
                                <div class="medicine-list-item__info">
                                    <p class="medicine-list-item__title">${medicineRecord.medicineName}</p>
                                    <p class="medicine-list-item__category">${medicineRecord.medicineCategory}</p>
                                    <p class="medicine-list-item__price">Rs. ${medicineRecord.medicinePrice}</p>
                                </div>
                            </div>
                            <div class="medicine-list-item-cart-add__container">
                                ${addToCartBtn}
                            </div>
                        </li>
                    `
            });

        } catch (error) {
            console.error("Search error:", error);
        }

        
    }, 400);
}

document.querySelector( "#closeMedicinesListContainer" ).addEventListener(
    "click",
    function() {
            document.getElementById( "medicineListSearchContainer" ).style.display = 
            "none";
    }
)

function openSearchBox() {
    document.getElementById( "medicineListSearchContainer" ).style.display = 
    "block";

    document.getElementById( 'medicinesListInputLabel' ).focus()
}

let timeout;

function searchMedicineByUser(inputValue) {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        try {

            
            let res = await fetch(`/user/api/medicines/?page=1&search=${inputValue}`);
            let data = await res.json();

            const profilePageCardContainer = document.getElementById("profilePageCardContainer");

            if ( profilePageCardContainer == null ) {
                window.location.assign( "/profile" );
            }
            
            profilePageCardContainer.innerHTML = "";


            data.forEach((medicineRecord, index) => {
                profilePageCardContainer.innerHTML += `
                    <div class="card">
                        <div class="card-header">
                        <img 
                            src="/uploads/medicines/${ medicineRecord.medicineImage }" 
                            alt="Medicine">
                        </div>

                        <div class="card-body">
                        <h3 class="card-title">${ medicineRecord.medicineName }</h3>

                        <div class="card-info">
                            <span class="category">
                                ${ medicineRecord.medicineCategory }
                            </span>
                            <span class="price">
                                Rs. ${ medicineRecord.medicinePrice }
                            </span>
                        </div>

                        <a href="/profile/product/${ medicineRecord._id }" class="add-to-cart-btn">
                            Add to Cart
                        </a>
                        </div>
                    </div> 
                `
            });

        } catch (error) {
            console.error("Search error:", error);
        }

        
    }, 400);
}
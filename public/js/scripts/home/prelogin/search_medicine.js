let timeout;

function searchMedicineByUser(inputValue) {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        try {

            
            const res = await fetch(`/user/api/medicines/?page=1&search=${inputValue}`);
            const data = await res.json();

            const homePageCardContainer = document.getElementById("homePageCardContainer");

            if ( homePageCardContainer == null ) {
                window.location.replace("/");
            }
            
            homePageCardContainer.innerHTML = "";
            


            data.forEach((medicineRecord, index) => {
                homePageCardContainer.innerHTML += `
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

                        <button class="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div> 
                `
            });

        } catch (error) {
            console.error("Search error:", error);
        }

        
    }, 400);
}
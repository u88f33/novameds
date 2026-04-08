let timeout;

function searchMedicineRecord(inputValue) {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        try {

            
            const res = await fetch(`/admin/api/medicines?search=${inputValue}`);
            const data = await res.json();

            const tableBody = document.getElementById("medicineRecordsTableBody");

            tableBody.innerHTML = "";

            data.forEach((medicineRecord, index) => {
                tableBody.innerHTML += `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${medicineRecord.medicineName}</td>
                            <td>${medicineRecord.medicineCategory}</td>
                            <td>Rs. ${ medicineRecord.medicinePrice }</td>
                            <td>${medicineRecord.medicineStock}</td>
                            <td>
                                <div class="dashboard__section-cell-actions">

                                    <a href="/admin/manage/medicines/view/${ medicineRecord._id }" class="action-btn">
                                        <i class="fa-solid fa-eye"></i>
                                        More Info
                                    </a>

                                    <a href="/admin/manage/medicines/update/${ medicineRecord._id }" class="action-btn">
                                        <i class="fa-solid fa-pen"></i>
                                        Update
                                    </a>

                                    <a href="/admin/manage/medicines/delete/${ medicineRecord._id }" class="action-btn">
                                        <i class="fa-solid fa-trash"></i>
                                        Delete
                                    </a>

                                </div>
                            </td>
                        </tr>   
                `;
            });

        } catch (error) {
            console.error("Search error:", error);
        }

        
    }, 400);
}
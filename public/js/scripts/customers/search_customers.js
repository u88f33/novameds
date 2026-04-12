let timeout;

function searchCustomerRecordByAdmin(inputValue) {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        try {

            
            const res = await fetch(`/admin/api/customers?search=${inputValue}`);
            const data = await res.json();

            const tableBody = document.getElementById("customerRecordsTableBody");

            tableBody.innerHTML = "";

            data.forEach((customerRecord, index) => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${ index + 1 }</td>
                        <td>${ customerRecord.customerName }</td>
                        <td>${ customerRecord.customerPhone }</td>
                        <td>${ customerRecord.customerAddress }</td>
                        <td>
                            <div class="dashboard__section-cell-actions">

                                <a href="/admin/manage/customers/view/${customerRecord._id}" class="action-btn">
                                    <i class="fa-solid fa-eye"></i>
                                    More Info
                                </a>

                                <a href="/admin/manage/customers/update/${ customerRecord._id }" class="action-btn">
                                    <i class="fa-solid fa-pen"></i>
                                    Update
                                </a>

                                <a href="/admin/manage/customers/delete/${ customerRecord._id }" class="action-btn">
                                    <i class="fa-solid fa-trash"></i>
                                    Delete
                                </a>

                                <a href="/admin/manage/customers/login/${ customerRecord._id }" class="action-btn">
                                    <i class="fa-solid fa-arrow-right-to-bracket pe-2"></i>
                                    Login
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
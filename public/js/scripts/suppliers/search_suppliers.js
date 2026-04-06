let timeout;

function searchSupplierRecord(inputValue) {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        try {
            const res = await fetch(`/admin/api/suppliers?search=${inputValue}`);
            const data = await res.json();

            const tableBody = document.getElementById("suppliersRecordsTableBody");

            tableBody.innerHTML = "";

            data.forEach((supplier, index) => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${supplier.supplierName}</td>
                        <td>${supplier.supplierPhone}</td>
                        <td>${supplier.supplierAddress}</td>
                        <td>
                            <div class="dashboard__section-cell-actions">
                                <a href="/admin/manage/suppliers/view/${supplier._id}" class="action-btn">
                                <i class="fa-solid fa-eye"></i>
                                More Info
                                </a>

                                <a href="/admin/manage/suppliers/update/${supplier._id}" class="action-btn">
                                <i class="fa-solid fa-pen"></i>
                                Update
                                </a>

                                <a href="/admin/manage/suppliers/delete/${supplier._id}" class="action-btn">
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
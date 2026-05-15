let recordId = "";
let recordName = ""
function openDeleteConfirmationBox(element) {
    recordId = element.dataset.recordId;
    recordName = element.dataset.recordName;
    let background = document.getElementById( "deleteConfirmationContainerBg" );
    background.style.display = "flex";
}

function cancelDeleteContainer() {
    let background = document.getElementById( "deleteConfirmationContainerBg" );
    background.style.display = "none";
}

function deleteItemRecord() {
    let background = document.getElementById( "deleteConfirmationContainerBg" );
    let confirmDeleteInput = document.getElementById( "deleteConfirmationInput" ).value;
    if ( confirmDeleteInput.toLowerCase() == "yes" ) {
        window.location.replace( `/admin/manage/${recordName}/delete/${recordId}` );
        window.location.reload();
    }
}
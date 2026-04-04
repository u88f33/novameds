const tabs = document.querySelectorAll(".profile-tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // remove active
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        // add active
        tab.classList.add("active");

        if (tab.dataset.tab === "profile") {
            document.getElementById("profilePanel").classList.add("active");
        } else {
            document.getElementById("securityPanel").classList.add("active");
        }
    });
});

const statusSelect = document.getElementById("statusFilter");

statusSelect.addEventListener("change", () => {
    localStorage.setItem("status", statusSelect.value);
    applyFilter();
});

function applyFilter() {
    const modules =
        JSON.parse(localStorage.getItem("moduleData")) || [];

    const statusFilter = localStorage.getItem("status");

    const filteredModules = statusFilter
        ? modules.filter((m) => m.status === statusFilter)
        : modules;

    console.log(filteredModules);
}

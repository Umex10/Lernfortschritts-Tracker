import { filterByStatus } from "../src/utils/filter.js";

const statusSelect = document.getElementById("statusFilter");

if (statusSelect) {
    statusSelect.addEventListener("change", () => {
        localStorage.setItem("status", statusSelect.value);
        applyFilter();
    });
}

function applyFilter() {
    const modules = JSON.parse(localStorage.getItem("moduleData")) || [];
    const statusFilter = localStorage.getItem("status");
    const filteredModules = filterByStatus(modules, statusFilter);
    console.log(filteredModules);
}

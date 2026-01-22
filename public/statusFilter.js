import { filterByStatus } from "../src/utils/filter.js";
import { setTasks } from "./index.js";

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
    setTasks(filteredModules);
}

const savedStatus = localStorage.getItem("status");
if (savedStatus !== null) {
    statusSelect.value = savedStatus;
}

applyFilter();
/**
 * Applies search and status filters on tasks based on user input and localStorage state.
 */
import { setTasks } from "./index.js";
import { handleFilter } from "../src/utils/filter.js";

const search = document.getElementById("search");
const statusSelect = document.getElementById("statusFilter");

// Restore saved status immediately when script loads
const savedStatus = localStorage.getItem("status");
if (savedStatus && savedStatus !== "all") {
  statusSelect.value = savedStatus;
}

function applyFilters() {
  const modules = JSON.parse(localStorage.getItem("moduleData")) || [];
  const filteredModules = handleFilter(modules, statusSelect.value, search.value);
  setTasks(filteredModules);
}

search.addEventListener("input", applyFilters);

statusSelect.addEventListener("change", () => {
  localStorage.setItem("status", statusSelect.value);
  applyFilters();
});

// Apply filters when modules are loaded
window.addEventListener('modulesLoaded', () => {
  applyFilters();
});

if (localStorage.getItem("moduleData")) {
  applyFilters();
}

import { setTasks } from "./index.js";
import { handleFilter } from "../src/utils/filter.js";
import { getModules } from "./getModules.js";

const search = document.getElementById("search");
const statusSelect = document.getElementById("statusFilter");

search.addEventListener("input", () => {
  const modules = getModules();
  const filteredModules = handleFilter(modules, statusSelect.value, search.value);
  setTasks(filteredModules);
})


statusSelect.addEventListener("change", () => {
  localStorage.setItem("status", statusSelect.value);

  const modules = getModules();
  const filteredModules = handleFilter(
    modules,
    statusSelect.value,
    search.value
  );

  setTasks(filteredModules);
});


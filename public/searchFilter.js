import { setTasks } from "./index.js";
import { filterBySearch } from "../src/utils/filter.js";
import { getModules } from "./getModules.js";

const search = document.getElementById("search");

search.addEventListener("input", () => {
  const text = search.value;
  const modules = getModules();
  const newModules = filterBySearch(modules, text);
  setTasks(newModules);
})
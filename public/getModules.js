import { STATUS } from "../constants/status.js";
import { setTasks } from "./index.js";

// Filter the status out, and create 3 different arrays
export const groupByStatus = (newModules) => {
  const groupedByStatus = newModules.reduce((acc, module) => {
  acc[module.status].push(module);
  return acc;
}, {
  [STATUS.TODO]: [],
  [STATUS.IN_PROGRESS]: [],
  [STATUS.DONE]: []
})
return groupedByStatus;
}

// Only run this code in the browser (not during tests)
export const getModules = () => {
  if (typeof localStorage !== 'undefined') {
  
  let newModules = []
  try {
    const loadedModules = localStorage.getItem("moduleData");
    if (loadedModules) {
      newModules = JSON.parse(loadedModules);
      setTasks(newModules);
    }
  } catch (error) {
    console.error("Fehler beim Laden der Module aus localStorage", error);
    newModules = [];
  }
}}

getModules();




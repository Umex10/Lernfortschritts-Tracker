import { STATUS } from "../src/constants/status.js";
import { groupByStatus } from "../src/utils/grouping.js";

const errorGetBox = document.getElementById("errorGetBox");

// Using localStorage to retrieve modules
export const getModules = () => {
  if (typeof localStorage !== 'undefined') {
    let newModules = [];
    try {
      const loadedModules = localStorage.getItem("moduleData");
      if (loadedModules) {
        newModules = JSON.parse(loadedModules);
        // We could group here if we returned grouped data, 
        // but current usage expects flat list or handles grouping elsewhere.
        // The original code calculated 'grouped' but didn't use it except to prove it works?
        const grouped = groupByStatus(newModules); 
        return newModules;
      }
    } catch (error) {
      console.error("Fehler beim Laden der Module aus localStorage", error);
      if (errorGetBox) {
        errorGetBox.textContent = "Beim Laden der Lerninhalte ist ein Fehler aufgetreten.";
        errorGetBox.style.display = "block";
      }
    }
  }
  return [];
};

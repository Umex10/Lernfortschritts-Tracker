/**
 * Service for fetching module data and synchronizing it with localStorage.
 */
import {STATUS} from "../constants/status.js"

// Fetches the module.json and saves it to localStorage
export const fetchModule = async () => {
  try {

    const data = localStorage.getItem("moduleData");

    if (!data) {
    const res = await fetch("module.json");

    if (!res.ok) throw new Error("Fetch failed");

    const modules = await res.json();
    // We need to set every task to "todo" if localstorage has no data
    modules.map(module => module.status = STATUS.TODO);
    localStorage.setItem("moduleData", JSON.stringify(modules));
    console.log("module.json saved to localStorage");
    return modules;
    }

    const localStorageModuls = JSON.parse(data);
    return localStorageModuls;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fetches module.json from server and overwrites localStorage
export const refetchModule = async () => {
  try {
    const res = await fetch("module.json");

    if (!res.ok) throw new Error("Fetch failed");

    const modules = await res.json();
    // Reset all tasks to "todo" status
    modules.map(module => module.status = STATUS.TODO);
    localStorage.setItem("moduleData", JSON.stringify(modules));
    console.log("module.json refetched and localStorage updated");
    return modules;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

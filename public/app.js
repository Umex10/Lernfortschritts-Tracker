import { modules } from "../tests/fixtures/dummyData.js";
import { STATUS } from "../public/constants/status.js";

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
if (typeof localStorage !== 'undefined') {
  localStorage.setItem("modules", JSON.stringify(modules));

  let newModules = [];

  try {
    const loadedModules = localStorage.getItem("modules");
    if (loadedModules) {
      newModules = JSON.parse(loadedModules);
    }
  } catch (error) {
    console.error("Fehler beim Laden der Module aus localStorage", error);
    newModules = [];
  }

  console.log(groupByStatus(newModules))
}


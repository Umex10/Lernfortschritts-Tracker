import { modules, STATUS } from "../tests/fixtures/dummyData.js";

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

// Filter the status out, and create 3 different arrays
const groupByStatus = (newModules) => {
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

console.log(groupByStatus(newModules))


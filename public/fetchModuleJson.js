import { fetchAndSaveModules } from "../src/services/moduleService.js";
import { setTasks } from "./index.js";

// Fetch data and notify when ready
fetchAndSaveModules()
  .then((data) => {
    console.log("Data loaded, dispatching event");
    // Trigger initial render
    setTasks(data);
    // Dispatch custom event for other modules
    window.dispatchEvent(new CustomEvent('modulesLoaded', { detail: data }));
  })
  .catch(console.error);

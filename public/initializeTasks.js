import { fetchModule } from "../src/services/moduleService.js";

const errorGetBox = document.getElementById("errorGetBox");

// Fetch data and notify when ready
export async function initializeTasks(){
  try {
    const data = await fetchModule();
    
    // custom event
    window.dispatchEvent(new CustomEvent('modulesLoaded', { detail: data }));
    
  } catch (error) {
    // error message
    errorGetBox.textContent = "Beim Laden der Lerninhalte ist ein Fehler aufgetreten.";
    errorGetBox.style.display = "block";
  }
}

initializeTasks();

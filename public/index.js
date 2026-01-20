import { getModules } from "./getModules.js";

const reload = document.getElementById("reload");

export function setTasks(modules) {
  const list = document.getElementById("tasks");
  if (!list) return;
  
  list.innerHTML = "";

  if (!modules || modules.length === 0) {
    console.log("No modules to display");
    return;
  }

  modules.forEach((module) => {
    if (!module || !module.status) {
      console.warn("Module missing status:", module);
      return;
    }

    //SInce some status values have a space letter
    const statusClass = `status-${module.status.replace(/\s+/g, "_")}`;

    const li = document.createElement("li");
    
    li.className = `task-item ${statusClass}`; 
    li.setAttribute("data-testid", `task-${module.id}`);

    li.innerHTML = `
      <div class="task-header">
        <span class="task-title" data-testid="task-title">${module.title ?? "Ohne Titel"}</span>
        <div class="task-container-category-status" data-testid="task-meta">
            <span class="task-category" data-testid="task-category">${module.category ?? ""}</span>
            <span class="task-status ${statusClass}" data-testid="task-status">${module.status}</span>
        </div>
      </div>
      <p class="task-desc" data-testid="task-desc">${module.description ?? ""}</p>
    `;
    
    list.appendChild(li);
  });
}

if (reload) {
  reload.addEventListener("click", () => {
    console.log("Reloaded");
    const newModules = getModules();
    setTasks(newModules);
  });
}

// Initial load will be triggered by fetchModuleJson.js
// But we also check if data is already there (for page refreshes)
const initialModules = getModules();
if (initialModules && initialModules.length > 0) {
  setTasks(initialModules);
}

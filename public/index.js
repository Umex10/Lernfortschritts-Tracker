import { getModules } from "./getModules.js";

const reload = document.getElementById("reload");
const taskList = document.getElementById("tasks");

export const setTasks = (newModules) => {
  if (!taskList) return;
  taskList.innerHTML = ""; // reset

  if (!newModules || newModules.length === 0) return;

  newModules.forEach(module => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="task-header">
        <span class="task-title">${module.title ?? "Ohne Titel"}</span>
        ${module.category ? `<span class="task-category">${module.category}</span>` : ""}
      </div>
      ${module.description
        ? `<p class="task-desc" title="${module.description}">${module.description}</p>`
        : ""}
      ${module.explanation
        ? `<p class="task-expl">${module.explanation}</p>`
        : ""}
    `;
    taskList.appendChild(li);
  });
};

if (reload) {
  reload.addEventListener("click", () => {
    console.log("Reloaded");
    const newModules = getModules();
    setTasks(newModules);
  });
}

// Initial load
const initialModules = getModules();
setTasks(initialModules);

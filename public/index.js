import { getModules } from "./getModules.js";

const reload = document.getElementById("reload");
const taskList = document.getElementById("tasks");

export const setTasks = (newModules) => {
  taskList.innerHTML = ""; // reset

  newModules.forEach(module => {
    const li = document.createElement("li");
    li.textContent = `${module.id} – ${module.status}`;
    taskList.appendChild(li);
  });
};



reload.addEventListener("click", () => {
  console.log("Reloaded")
  const newModules = getModules();
  setTasks(newModules);
});


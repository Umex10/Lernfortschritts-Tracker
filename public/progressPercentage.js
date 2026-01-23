import { initializeTasks } from "./initializeTasks.js";

const STORAGE_KEY = "moduleData";

document.addEventListener("DOMContentLoaded", () => {
  renderAll();

  // Reaload button automatically refreshes progress bars
  document.getElementById("reload")?.addEventListener("click", () => {
    initializeTasks();
  });
});

window.addEventListener("modulesLoaded", (e) => {
  const modules = e.detail;
  if (!Array.isArray(modules)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(modules));
  renderAll(modules);
});

function getFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

function renderAll(modules = getFromStorage()) {
  if (!modules.length) return;
  renderProgress(modules);
  renderCategoryProgress(modules);
}

/*All tasks all/done */
function calc(modules) {
  const total = modules.length;
  const done = modules.filter((m) => m.status === "done").length;
  const percent = Math.round((done / total) * 100);
  return { percent, total, done };
}

/*create progressbar, % = width in css styling with different bg color*/
function renderProgress(modules) {
  const { percent, total, done } = calc(modules);
  const container = document.getElementById("progressbar");
  if (!container) return;
  container.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "progressWrap is-overall";

  const progressText = document.createElement("div");
  progressText.className = "progressText";

  const title = document.createElement("h3");
  title.className = "progressTitle";
  title.textContent = `Gesamtfortschritt`;

  const percentEl = document.createElement("span");
  percentEl.className = "progressPercent";
  percentEl.textContent = `${percent}%`;

  const track = document.createElement("div");
  track.className = "progressTrack";

  const fill = document.createElement("div");
  fill.className = "progressFill";
  fill.style.width = `${percent}%`;

  track.appendChild(fill);
  progressText.appendChild(title);
  progressText.appendChild(percentEl);
  wrap.appendChild(progressText);
  wrap.appendChild(track);
  container.appendChild(wrap);
}

function renderCategoryProgress(modules) {
  const container = document.getElementById("progressbar");
  if (!container) return;

  /*Group modules by category(list of modules)*/
  const groups = {};
  modules.forEach((m) => {
    const cat = m.category;
    if (!groups[cat]) {
      groups[cat] = [];
    }
    groups[cat].push(m);
  });
  // Get the category object(groups) values + sorting
  const categories = Object.keys(groups).sort();

  categories.forEach((cat) => {
    const items = groups[cat];
    const { percent } = calc(items);

    const wrap = document.createElement("div");
    wrap.className = "progressWrap";

    const progressText = document.createElement("div");
    progressText.className = "progressText";

    const title = document.createElement("h3");
    title.className = "progressTitle";
    title.textContent = cat;

    const percentEl = document.createElement("span");
    percentEl.className = "progressPercent";
    percentEl.textContent = `${percent}%`;

    const track = document.createElement("div");
    track.className = "progressTrack";

    const fill = document.createElement("div");
    fill.className = "progressFill";
    fill.style.width = `${percent}%`;

    track.appendChild(fill);

    progressText.appendChild(title);
    progressText.appendChild(percentEl);

    wrap.appendChild(progressText);
    wrap.appendChild(track);
    container.appendChild(wrap);
  });
}

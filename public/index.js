/**
 * Renders tasks into the DOM, handles status changes, and manages the local status history.
 */
import { STATUS } from "../src/constants/status.js";
import { initializeTasks } from "./initializeTasks.js";

//const reload = document.getElementById("reload");

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

    // Add empty class if category or description is missing
    const categoryClass = module.category ? "" : "empty";
    const descClass = module.description ? "" : "empty";

    // Checks if some module needs to be on status done,
    // in order for this module to work
    const li = document.createElement("li");

    // Status class (todo | in_progress | done)
    //SInce some status values have a space letter
    const statusClass = `status-${module.status.replace(/\s+/g, "_")}`;

    // Dependency Text (waitingFor)
    let dependencyText = "-";

    if (module.waitingFor) {
      const dep = modules.find(
        (m) => Number(m.id) === Number(module.waitingFor),
      );

      if (dep) {
        dependencyText = "Depends on: " + (dep.title || dep.id);
      } else {
        dependencyText = "Depends on: " + module.waitingFor;
      }
    }

    // LOCKED check
    const isLocked = module.waitingFor;
    let lockElement = false;

    if (isLocked) {
      const waitingForModule = modules.find((m) => m.id === isLocked);
      if (waitingForModule && waitingForModule.status !== STATUS.DONE) {
        lockElement = true;
      }
    }

    // Archive init
    if (!module.archive) module.archive = [];

    // History HTML like before just as section
    let archiveHTML = "";
    if (module.archive.length > 0) {
      const archiveItems = module.archive
        .map((entry) => {
          const commentText = entry.comment
            ? ` - Comment: ${entry.comment}`
            : "";
          return `<li>${entry.timestamp} - Status: <strong>${entry.status}</strong>${commentText}</li>`; //add comment if exists & is not empty ""
        })
        .join("");

      archiveHTML = `
    <details class="task-archive">
      <summary>History (${module.archive.length})</summary>
      <ul class="archive-list">
        ${archiveItems}
      </ul>
    </details>
  `;
    }

    li.className = `task-item ${lockElement ? "locked" : ""}`;
    li.setAttribute("data-testid", `task-${module.id}`);

    li.innerHTML = `
      <details class="task-card" data-task-card-id="${module.id}">
        <summary class="task-summary">
          <div class="task-summary-left">
            <div class="task-title" data-testid="task-title">
              ${module.title ?? "Ohne Titel"}
            </div>
            <span class="task-status-pill ${statusClass}">
              ${module.status ?? "todo"}
            </span>
          </div>
          <span class="task-chevron" aria-hidden="true"></span>
        </summary>

        <div class="task-body">
          <div class="task-field">
            <div class="task-label">Category</div>
            <div class="task-value" data-testid="task-category">${module.category ?? "-"}</div>
          </div>

          <div class="task-field">
            <div class="task-label">Dependencies</div>
            <div class="task-value">${dependencyText}</div>
          </div>

          <div class="task-field">
            <div class="task-label">Description</div>
            <div class="task-value">${module.description ?? "-"}</div>
          </div>

          <div class="task-field">
            <div class="task-label">Status</div>
           <select class="task-status-select form ${statusClass}"
              data-testid="task-status"
              data-task-id="${module.id}"
                  ${lockElement ? "disabled" : ""}>
            <option value="${STATUS.TODO}" ${module.status === STATUS.TODO ? "selected" : ""}>${STATUS.TODO}</option>
            <option value="${STATUS.IN_PROGRESS}" ${module.status === STATUS.IN_PROGRESS ? "selected" : ""}>${STATUS.IN_PROGRESS}</option>
            <option value="${STATUS.DONE}" ${module.status === STATUS.DONE ? "selected" : ""}>${STATUS.DONE}</option>
          </select>
          </div>

          <div class="task-field">
            <div class="task-label">Comment</div>
            <textarea id="comment-${module.id}" class="task-comment" placeholder="add a comment"></textarea>
          </div>

          <button class="task-save" type="button" data-task-id="${module.id}" ${lockElement ? "disabled" : ""}>
          Save
          </button>

          ${archiveHTML}
        </div>
      </details>
    `;

    list.appendChild(li);
  });

  // 1) Status changed -> enable the Save button (does not save yet)
  list.onchange = (e) => {
    const select = e.target.closest(".task-status-select");
    if (!select || select.disabled) return;

    const card = select.closest(".task-card");
    const saveBtn = card.querySelector(".task-save");
    if (saveBtn) saveBtn.disabled = false;
  };

  // 2) Comment typed -> enable the Save button (does also not save yet)
  list.oninput = (e) => {
    const textarea = e.target.closest(".task-comment");
    if (!textarea) return;

    const card = textarea.closest(".task-card");
    const saveBtn = card.querySelector(".task-save");
    if (saveBtn) saveBtn.disabled = false;
  };

  // 3) Save clicked -> now persist status + comment to history and localStorage
  list.onclick = (e) => {
    const btn = e.target.closest(".task-save");
    if (!btn || btn.disabled) return;

    const taskId = btn.dataset.taskId;
    const card = btn.closest(".task-card");

    const select = card.querySelector(
      `.task-status-select[data-task-id="${taskId}"]`,
    );
    const commentEl = card.querySelector(`#comment-${taskId}`);

    const newStatus = select ? select.value : STATUS.TODO;
    const comment = commentEl ? commentEl.value.trim() : "";

    const modules = JSON.parse(localStorage.getItem("moduleData")) || [];
    const moduleToUpdate = modules.find((m) => String(m.id) === String(taskId));
    if (!moduleToUpdate) return;

    const oldStatus = moduleToUpdate.status;

    // Only saving if the status actually changed (is in the taks requirements)
    if (String(oldStatus) !== String(newStatus)) {
      if (!moduleToUpdate.archive) moduleToUpdate.archive = [];
      moduleToUpdate.archive.push({
        status: newStatus,
        comment: comment,
        timestamp: new Date().toLocaleString("de-DE"),
      });

      moduleToUpdate.status = newStatus;
      localStorage.setItem("moduleData", JSON.stringify(modules));

      // Rerender and update progress bars
      setTasks(modules);
      window.dispatchEvent(new Event("modulesUpdated"));
    }

    // Reset the Save button and clear the comment field value
    btn.disabled = true;
    if (commentEl) commentEl.value = "";
  };
}

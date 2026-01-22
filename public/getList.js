const STORAGE_KEY = "moduleData";

document.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        console.error("No module data in localStorage");
        return;
    }

    const modules = JSON.parse(data);

    renderModules(modules);

    const statusFilter = document.getElementById("statusFilter");
    statusFilter.addEventListener("change", () => {
        const value = statusFilter.value;

        if (value === "All") {
            renderModules(modules);
        } else {
            const filtered = modules.filter(m => m.status === value);
            renderModules(filtered);
        }
    });
});

function getStatusClass(status) {
    if (typeof status !== "string") return "status-unknown";

    switch (status.toLowerCase()) {
        case "done":
            return "status-done";
        case "open":
            return "status-open";
        case "in progress":
            return "status-in-progress";
        default:
            return "status-unknown";
    }
}


function renderModules(modules) {

    modules.forEach(m => {
        if (!m.status) {
            console.warn("Module missing status:", m);
        }
    });

    const container = document.getElementById("moduleList");
    container.innerHTML = "";

    modules.forEach((module, index) => {
        const card = document.createElement("div");
        card.className = "moduleCard";

        const headerRow = document.createElement("div");
        headerRow.className = "card-header-row";

        const title = document.createElement("div");
        title.className = "ModuleTitle";
        title.textContent = module.title;

        const categoryBadge = document.createElement("div");
        categoryBadge.className = "category-badge";
        categoryBadge.textContent = module.category;

        const details = document.createElement("span");
        details.className = "arrow";

        headerRow.appendChild(title);
        headerRow.appendChild(categoryBadge);
        headerRow.appendChild(details);

        const status = document.createElement("div");
        status.className = `status ${getStatusClass(module.status)}`;
        status.textContent = module.status;

        const detailContent = document.createElement("div");
        detailContent.className = "module-detail-content";
        renderDetail(detailContent, index, modules);

        card.appendChild(headerRow);
        card.appendChild(status);
        card.appendChild(detailContent);

        card.addEventListener('click', (e) => {
            const header = e.target.closest('.card-header-row');
            if (!header) return;

            const card = header.closest('.moduleCard');
            if (!card) return;

            card.classList.toggle('is-open');
        });

        container.appendChild(card);
    });

    addButtonListeners(modules);
}

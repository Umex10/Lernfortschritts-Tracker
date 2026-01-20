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

function renderModules(modules) {

    modules.forEach(m => {
        if (!m.status) {
            console.warn("Module missing status:", m);
        }
    });

    const container = document.getElementById("moduleList");
    container.innerHTML = "";

    modules.forEach(module => {
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

        headerRow.appendChild(title);
        headerRow.appendChild(categoryBadge);

        const status = document.createElement("div");
        status.textContent = module.status;

        card.appendChild(headerRow);
        card.appendChild(status);

        container.appendChild(card);
    });
}

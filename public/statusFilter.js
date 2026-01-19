const statusSelect = document.getElementById("statusFilter");

if (statusSelect) {
    statusSelect.addEventListener("change", () => {
        localStorage.setItem("statusFilter", statusSelect.value);
        applyFilter();
    });
}

export function changeModuleStatus(moduleId, newStatus) {
    try {
        // 1. Module aus dem localStorage abrufen
        const modules =
            JSON.parse(localStorage.getItem("moduleData")) || [];

        // 2. Das entsprechende Modul finden
        const moduleIndex = modules.findIndex(m => m.id === moduleId);
        if (moduleIndex !== -1) {
            //3.Modul Status aktualisieren
            modules[moduleIndex].status = newStatus;
            //4. Aktualisierte Module zurück in den localStorage speichern
            localStorage.setItem("moduleData", JSON.stringify(modules));
            console.log(`Modul ${moduleId} wurde auf Status ${newStatus} gesetzt.`);
            console.log("Updated localStorage:", modules);
            //5.Visual Rückmeldung
            showMessage('Status aktualisiert', 'success');

            //6.Liste neu laden
            setTimeout(() => {
                if(window.getModules && typeof window.getModules === 'function') {
                    const updatedModules = window.getModules();
                    if(window.setTasks && typeof window.setTasks === 'function') {
                        window.setTasks(updatedModules);
                    }

                }
            },100);
            return true;
        } else {
        console.warn(`Modul ${moduleId} nicht gefunden.`);
        showMessage('Modul ${moduleId} nicht gefunden', 'error');
        return false;
        }
    } catch (error) {
        console.error("Fehler beim Aktualisieren des Modulstatus:", error);
        showMessage('Fehler beim Aktualisieren des Modulstatus', 'error');
        return false;
    }
}
function applyFilter() {
    const modules =
        JSON.parse(localStorage.getItem("moduleData")) || [];

    const statusFilter = localStorage.getItem("statusFilter") || "all";

    const filteredModules = statusFilter === "all"
        ? modules
        : modules.filter((m) => m.status === statusFilter);

    console.log("Gefilterte Module:", filteredModules);

    if (window.setTasks && typeof window.setTasks === "function") {
        window.setTasks(filteredModules);
    }
}

window.changeModuleStatus = function(moduleId, newStatus) {
    return changeModuleStatus(moduleId, newStatus);
};

function showMessage(text, type = 'info') {
    const messageBox = document.getElementById('messageBox');
    if (messageBox) {
        messageBox.textContent = text;
        messageBox.className = type === 'error' ? 'error' :'success';
       messageBox.style.display = 'block';

        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedStatus = localStorage.getItem("statusFilter");
    if (savedStatus && statusSelect) {
        statusSelect.value = savedStatus;
    }
});
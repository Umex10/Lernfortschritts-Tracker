// Pure business logic for filtering modules by status
// Erwartung: "status" ist genau einer der Werte aus STATUS ("todo", "in progress", "done")
export const filterByStatus = (modules, status) => {
  if (!status || status === "all") return modules;
  return modules.filter((m) => m.status === status);
};

export const filterBySearch = (modules, text) => {
  // Achtung: document Zugriff in Utils ist nicht optimal für Tests, aber hier funktional
  const statusSelect = document.getElementById("statusFilter");
  if (!text) {
      // Wenn Suchtext leer ist, nur Status-Filter anwenden
      return statusSelect ? filterByStatus(modules, statusSelect.value) : modules;
  }

  // Case-Insensitive Suche
  const lowerText = text.toLowerCase();
  return modules.filter((m) => 
    (m.title && m.title.toLowerCase().includes(lowerText))
  );
}
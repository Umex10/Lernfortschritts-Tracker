/**
 * Utility functions to filter modules by status and search text.
 */

export const handleFilter = (modules, status, text) => {

  const filteredByStatus = filterByStatus(modules, status);
  const filteredBySearch = filterBySearch(filteredByStatus, text)

  return filteredBySearch;
}

const filterByStatus = (modules, status) => {
  if (!status || status === "all") return modules;
  return modules.filter(m => m.status === status);
};

const filterBySearch = (modules, text) => {
  if (!text) return modules;

  const lowerText = text.toLowerCase();

  return modules.filter(m =>
    m.title?.toLowerCase().includes(lowerText)
  );
};
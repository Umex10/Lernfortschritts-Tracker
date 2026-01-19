// Pure business logic for filtering modules by status
export const filterByStatus = (modules, status) => {
  if (!status || status === "all") return modules;
  return modules.filter((m) => m.status === status);
};

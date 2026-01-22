import { STATUS } from "../constants/status.js";

// Reine Business-Logik: gruppiert Module nach ihrem Status
export const groupByStatus = (modules) => {
  return modules.reduce((acc, module) => {
    if (module && module.status && acc[module.status]) {
      acc[module.status].push(module);
    }
    return acc;
  }, {
    [STATUS.TODO]: [],
    [STATUS.IN_PROGRESS]: [],
    [STATUS.DONE]: []
  });
};

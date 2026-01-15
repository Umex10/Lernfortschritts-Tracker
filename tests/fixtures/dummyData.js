import { STATUS } from "../../public/constants/status";

// Dummy data for tests
export const modules = [
  // IN PROGRESS
  {
    id: 1,
    title: "Grundlagen von JavaScript",
    status: STATUS.IN_PROGRESS,
    category: "Web Development",
    description: "Variablen, Funktionen, Scope und grundlegende Syntax."
  },
  {
    id: 2,
    title: "React Hooks verstehen",
    status: STATUS.IN_PROGRESS,
    category: "Frontend",
    description: "useState, useEffect und der Umgang mit State."
  },
  {
    id: 3,
    title: "REST APIs mit Express",
    status: STATUS.IN_PROGRESS,
    description: "Aufbau von Endpoints, Request/Response-Zyklus."
  },

  // DONE
  {
    id: 4,
    title: "HTML & CSS Basics",
    status: STATUS.DONE,
    category: "Web Development",
    description: "Grundstruktur von Webseiten und Styling mit CSS."
  },
  {
    id: 5,
    title: "Git Grundlagen",
    status: STATUS.DONE,
    category: "Tooling",
    description: "Committen, Branches, Merge und Rebase."
  },
  {
    id: 6,
    title: "TypeScript Basics",
    status: STATUS.DONE,
    description: "Typen, Interfaces und grundlegende Typisierung."
  },

  // TODO
  {
    id: 7,
    title: "Next.js Routing",
    status: STATUS.TODO,
    category: "Frontend",
    description: "File-based Routing und Layouts in Next.js."
  },
  {
    id: 8,
    title: "Authentifizierung mit JWT",
    status: STATUS.TODO,
    category: "Backend",
    description: "Login-Flow, Tokens und Absicherung von Endpoints."
  },
  {
    id: 9,
    title: "Testing mit Jest",
    status: STATUS.TODO,
    description: "Unit-Tests und grundlegende Teststrategien."
  }
];

// Dummy data for tests (status-Werte als Strings passend zu public/constants/status.js)
export const modules = [
  // IN PROGRESS
  {
    id: 1,
    title: "Grundlagen von JavaScript",
    status: "in progress",
    category: "Web Development",
    description: "Variablen, Funktionen, Scope und grundlegende Syntax."
  },
  {
    id: 2,
    title: "React Hooks verstehen",
    status: "in progress",
    category: "Frontend",
    description: "useState, useEffect und der Umgang mit State."
  },
  {
    id: 3,
    title: "REST APIs mit Express",
    status: "in progress",
    description: "Aufbau von Endpoints, Request/Response-Zyklus."
  },

  // DONE
  {
    id: 4,
    title: "HTML & CSS Basics",
    status: "done",
    category: "Web Development",
    description: "Grundstruktur von Webseiten und Styling mit CSS."
  },
  {
    id: 5,
    title: "Git Grundlagen",
    status: "done",
    category: "Tooling",
    description: "Committen, Branches, Merge und Rebase."
  },
  {
    id: 6,
    title: "TypeScript Basics",
    status: "done",
    description: "Typen, Interfaces und grundlegende Typisierung."
  },

  // TODO
  {
    id: 7,
    title: "Next.js Routing",
    status: "todo",
    category: "Frontend",
    description: "File-based Routing und Layouts in Next.js."
  },
  {
    id: 8,
    title: "Authentifizierung mit JWT",
    status: "todo",
    category: "Backend",
    description: "Login-Flow, Tokens und Absicherung von Endpoints."
  },
  {
    id: 9,
    title: "Testing mit Jest",
    status: "todo",
    description: "Unit-Tests und grundlegende Teststrategien."
  }
];

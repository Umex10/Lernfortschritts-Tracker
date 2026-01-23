## 📚 Learning Progress Tracker

A web application for structured tracking of your learning progress. Users can view a list of predefined learning content, set their current learning status for each item, and add personal comments. Progress is visualized clearly, learning content can be searched or filtered, and all data is persistently stored so your learning progress is preserved across visits.

## ✨ Features

- **Task Management**: View and manage learning tasks with status tracking (todo, in progress, done)
- **Status Dropdown**: Change task status directly from the task list with instant visual feedback
- **Advanced Filtering**: 
  - Filter by status (todo, in progress, done, or all)
  - Search by task title
  - Combined search and status filtering
- **Status History**: Track all status changes with timestamps in a collapsible archive
- **Task Dependencies**: Lock tasks that depend on completion of other tasks (shown with 🔒 icon)
- **Persistent Storage**: All changes are saved to localStorage
- **Filter Persistence**: Selected filters are remembered across page reloads
- **Responsive Design**: Mobile-friendly layout

## 🚀 Quick Start

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev   # Development server with nodemon
```

The server runs by default at `http://localhost:3000`.

Run tests:

```bash
npm test            # Playwright E2E tests in headless mode
npm run test:headed # Playwright with visible browser
```

More details about tests in [docs/tests.md](docs/tests.md).

## 🗂 Project Structure

- **[server](server)** – Express server serving static files and module.json API
- **[public](public)** – Static frontend code (HTML, CSS, JS)
	- [index.html](public/index.html) – Main entry point
	- [style.css](public/style.css) – Layout and styling with comprehensive comments
	- [index.js](public/index.js) – Task rendering, status updates, and archive management
	- [initializeTasks.js](public/initializeTasks.js) – Loads modules and dispatches events
	- [handleFilter.js](public/handleFilter.js) – Manages search and status filtering
- **[src](src)** – Business logic and utilities
	- [constants/status.js](src/constants/status.js) – Centralized status constants
	- [services/moduleService.js](src/services/moduleService.js) – Module data fetching
	- [utils/filter.js](src/utils/filter.js) – Filtering logic
- **[tests](tests)** – Playwright E2E tests with test fixtures
  - [e2e/initialization.e2e.spec.js](tests/e2e/initialization.e2e.spec.js) – Initial load tests
  - [e2e/status-filter.e2e.spec.js](tests/e2e/status-filter.e2e.spec.js) – Status filtering tests
  - [e2e/search-filter.e2e.spec.js](tests/e2e/search-filter.e2e.spec.js) – Search functionality tests
  - [e2e/combined-filters.e2e.spec.js](tests/e2e/combined-filters.e2e.spec.js) – Combined filter tests
  - [fixtures/dummyData.js](tests/fixtures/dummyData.js) – Test data
- **[docs](docs)** – Comprehensive project documentation

A more detailed description of the frontend can be found in [docs/public.md](docs/public.md).

## 🧪 Testing

E2E tests are based on Playwright and located in [tests/e2e](tests/e2e).

**Test Strategy:**
- Tests use dummy data from [tests/fixtures/dummyData.js](tests/fixtures/dummyData.js)
- Playwright intercepts `module.json` requests to provide predictable test data
- Tests are organized by feature (initialization, status filter, search filter, combined)
- All tests run against the real application with test data injection

See [tests/e2e/README.md](tests/e2e/README.md) for detailed test documentation.

## 📄 Documentation

This project uses a combination of central and folder-specific documentation:

- **Central Documentation:**
	- [docs/public.md](docs/public.md) – Frontend overview and architecture
	- [docs/tests.md](docs/tests.md) – Testing strategy, E2E structure, and fixtures
- **Folder READMEs:**
	- [tests/e2e/README.md](tests/e2e/README.md) – E2E test data strategy

Guidelines for creating new documentation can be found in [CONTRIBUTING.md](CONTRIBUTING.md).

## 🎨 Recent Updates

- **Editable Status Dropdowns**: Each task now has a dropdown for direct status changes
- **Status History Archive**: Collapsible history showing all status changes with timestamps
- **Task Locking**: Tasks can be locked based on dependencies (`waitingFor` field)
- **Improved Filtering**: Filter state persists across page reloads
- **CSS Documentation**: Comprehensive English comments in style.css
- **Test Organization**: E2E tests split into logical feature-based files

## 👥 Team Members

| Name                  | GitHub                                       |
| --------------------- | -------------------------------------------- |
| Thomas Feyerl         | [@Thomas](https://github.com/FrontendTF)     |
| Umejr Dzinovic        | [@Umejr](https://github.com/Umex10)          |
| Rozaliya Aleksandrova | [@Rozaliya](https://github.com/rozaliyaAleksandrova) |
| Liyu Wu               | [@Liyu](https://github.com/LiyuWu1976)       |
| Afik                  | [@Afik]()                                   |

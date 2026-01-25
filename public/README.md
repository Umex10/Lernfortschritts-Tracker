# Public Folder

This folder contains all static assets and client-side code that is served directly by the Express server.

## Files

### index.html
- Main HTML entry point of the application.
- Includes the core layout, search input, status filter dropdown, task list container, and progress indicators.
- Loads `style.css` for styling and the JavaScript modules `initializeTasks.js`, `index.js`, `handleFilter.js`, and `progressPercentage.js`.

### style.css
- Central stylesheet for the entire UI.
- Defines typography, layout, task card styling, status colors, lock state visuals, progress bars, and responsive behavior for mobile screens.

### initializeTasks.js
- Fetches module data from the server via the `moduleService` layer.
- Stores the module data in `localStorage` when needed.
- Dispatches a custom `modulesLoaded` event so other scripts can react when data is available.
- Triggers re-rendering of tasks and progress indicators.

### index.js
- Renders the task list into the DOM based on the module data using collapsible `<details>` cards.
- Applies CSS classes for task status and lock state.
- Displays task information including title, category, dependencies, description, and status.
- Renders a status history section (`.task-archive`) when archive entries exist, showing past status changes with timestamps.
- Attaches change listeners to each status dropdown to:
  - Update the task status in `localStorage`.
  - Append entries to the task's status history (`archive`) with timestamp.
  - Enable the "Save" button for the modified task.
- Attaches click listeners to "Save" buttons to trigger `initializeTasks()`, which re-renders the entire task list to reflect updated status and history.
- Includes a comment textarea field for adding personal notes to each task.

### handleFilter.js
- Wires up the search input and status filter dropdown.
- Reads module data from `localStorage`, applies filtering using `src/utils/filter.js`, and calls `setTasks` from `index.js` to render the filtered list.
- Persists the selected status filter value in `localStorage` and restores it on page load.

### progressPercentage.js
- Calculates and displays overall learning progress as a percentage.
- Renders category-specific progress bars for each unique category in the module data.
- Listens to the `modulesLoaded` event to automatically update progress indicators when data changes.
- Provides visual feedback on completion status across all tasks and per category.

## Related Source Files

The following non-public source files are closely related to this folder:

- `src/constants/status.js` – Central status constants used by both frontend and tests.
- `src/services/moduleService.js` – Fetches `module.json` and synchronizes it with `localStorage`.
- `src/utils/filter.js` – Implements the filtering logic used by `handleFilter.js`.

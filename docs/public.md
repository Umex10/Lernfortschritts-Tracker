# Documentation: `public` Folder

## Purpose

The `public` folder contains all client-side code loaded directly by the browser (HTML, CSS, JavaScript, assets).

## Key Files

### Core Application Files
- **[index.html](../public/index.html)** – Application entry point, includes styles and scripts
- **[style.css](../public/style.css)** – Central styling with comprehensive English comments explaining each CSS class
- **[index.js](../public/index.js)** – Renders task list in DOM, manages status dropdowns, and handles archive display

### Data Management
- **[initializeTasks.js](../public/initializeTasks.js)** – Fetches modules from server, saves to localStorage, and dispatches `modulesLoaded` event
- **[handleFilter.js](../public/handleFilter.js)** – Manages search and status filtering with localStorage persistence

### Architecture

The application follows an event-driven architecture:

1. **Initialization** (`initializeTasks.js`):
   - Fetches data from `module.json`
   - Stores in localStorage
   - Dispatches `modulesLoaded` custom event

2. **Rendering** (`index.js`):
   - Listens for `modulesLoaded` event
   - Renders tasks with status dropdowns
   - Adds event listeners for status changes
   - Manages status change history (archive)

3. **Filtering** (`handleFilter.js`):
   - Listens for `modulesLoaded` event
   - Applies saved filters from localStorage
   - Updates display on filter changes
   - Persists filter state

## Features

### Task Display
- Task cards with title, category, status, and description
- Empty categories/descriptions are hidden but preserve layout space
- Locked tasks (based on dependencies) are grayed out and non-interactive

### Status Management
- **Editable Dropdowns**: Each task has a dropdown to change status directly
- **Visual Feedback**: Status colors update immediately on change
- **Persistence**: Status changes are saved to localStorage
- **History Tracking**: All status changes are archived with timestamps

### Filtering
- **Status Filter**: Filter by todo, in progress, done, or all
- **Search Filter**: Search by task title (case-insensitive)
- **Combined Filters**: Both filters work simultaneously
- **State Persistence**: Selected filters are remembered across page reloads

### Task Archive
- Collapsible history showing all status changes
- Uses native HTML `<details>` and `<summary>` elements
- Only displayed when history exists
- Timestamps in German locale format

### Task Dependencies
- Tasks can depend on other tasks (`waitingFor` field)
- Locked tasks show 🔒 icon
- Locked tasks are dimmed and non-interactive until dependency is met

## Constants (`public/constants`)

Currently contains:
- **status.js**: Central definition of learning status (`STATUS.TODO`, `STATUS.IN_PROGRESS`, `STATUS.DONE`)

Purpose:
- Single source of truth for status values
- Prevents magic strings in code
- Ensures consistency across modules and tests

Guidelines:
- Place reusable constants here
- Keep identifiers stable as tests and modules depend on them

## Data Flow

```
initializeTasks.js
    ↓ fetch module.json
    ↓ save to localStorage
    ↓ dispatch 'modulesLoaded' event
    ↓
index.js & handleFilter.js
    ↓ listen for event
    ↓ read from localStorage
    ↓ render/filter tasks
    ↓
User interactions
    ↓ status change / filter
    ↓ update localStorage
    ↓ re-render
```

## Styling

The `style.css` file includes:
- Comprehensive English comments explaining each class
- Organized sections (Typography, Form Controls, Task List, etc.)
- Responsive design for mobile devices
- Special classes for locked tasks (`.locked`)
- Status color variants (`.status-todo`, `.status-in_progress`, `.status-done`)
- Archive styling (`.task-archive`, `.archive-list`)

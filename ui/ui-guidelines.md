# UI Guidelines – Learning Progress Tracker

## Purpose
This document defines the UI and interaction behavior for the Learning Progress Tracker web app. It is the source of truth for implementation.

## Overall Layout
- Single-page application (SPA)
- Mobile-first, single-column layout
- Desktop uses a centered content column with a max width
- No separate mobile/desktop designs; the same structure adapts responsively

## Reference Screenshots

The following screenshots illustrate the intended UI layout and interactions:

- `web-page.png`: Full page layout (desktop)
- `web-item.png`: Expanded learning item (desktop)
- `mobile-page.png`: Full page layout (mobile)
- `mobile-item.png`: Expanded learning item (mobile)

These images complement the guidelines and serve as visual reference.

## Data Model Constraints (UI)
- Learning items are predefined (loaded from `modules.json`)
- Read-only fields:
  - Title
  - Category
  - Dependencies (prerequisites)
  - Description (from JSON, if present)
- Editable fields:
  - Status (Not started / In progress / Done)
  - Comment / Notes (user input)

## Top Section
### App Title
- Displayed at the top of the page

### Search
- Located below the title
- Searches by title (optional: also search predefined description)
- Filters results as the user types (no extra submit button required)

### Status Filter
- Dropdown below the search
- Label: “Filter by status”
- Options:
  - All (default)
  - Not started
  - In progress
  - Done
- Works together with search

## Sprint 2: Progress Dashboard
- A progress section is visible near the top of the page
- Shows:
  - Overall progress as a percentage + progress bar
  - Progress per category as percentages + progress bars
- No chart library needed (simple progress bars)

## Categories & List Structure
- Learning items are grouped by category
- Each category has:
  - A heading
  - (Optional but recommended) the category progress bar shown near the heading
- Items are displayed in a vertical list under the category

## Learning Item (Collapsed)
Each item row shows:
- Title (read-only)
- Status pill (read-only indicator)

## Learning Item (Expanded Inline)
- Clicking/tapping an item expands it inline
- Only one item can be expanded at a time
- Do not duplicate the title: the title in the list row acts as the header for the expanded content

Expanded content shows (in this order):
1. Category (read-only)
2. Dependencies (read-only)
   - Display as “Depends on: …” (simple list or inline text)
3. Description (read-only, from predefined data if present)
4. Comment / Notes (editable textarea)
5. Status selector (editable)
6. History (read-only, Sprint 2)

### History / Change Log (Sprint 2)
- Shown as a dedicated “History” section inside the expanded item
- Logs status changes only
- Each entry shows:
  - Timestamp
  - Old status → new status
- History is read-only and visually secondary

## Actions
### Save
- Primary action in expanded view
- Saves status + comment locally

### Reset Progress (Sprint 2)
- Global action near the progress dashboard
- Requires confirmation
- Resets app to factory default:
  - Status → Not started for all items
  - Comment / Notes → empty or default (team decision)
  - History → cleared
- Predefined fields (title/category/dependencies/description) remain unchanged

## Feedback & States
- Empty result state:
  - If no items match search/filter, show “No items found”
- Error state:
  - If `modules.json` cannot be loaded, show a clear error message in the UI
- UI updates immediately after save/reset actions

## Responsiveness & Accessibility
- Touch targets must be usable on mobile
- Clear spacing and hierarchy
- Avoid unnecessary animations or visual noise

## Non-goals
- No authentication/login
- No backend/network sync indicators
- Users cannot create or delete learning items
- Users cannot edit title/category/dependencies/predefined description

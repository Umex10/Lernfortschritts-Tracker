# Tests – Overview

This document briefly describes the test structure of the project, especially the E2E tests and their fixtures.

## Folder `tests/e2e`

The `tests/e2e` folder contains end-to-end (E2E) tests written with Playwright.

Currently:
- `tasks.e2e.spec.js`: Tests task list initialization and filtering (status filter, search filter, combined filters) using dummy data from `tests/fixtures`.
- `status-history.e2e.spec.js`: Tests task status persistence and the status history (archive) across page reloads.

Purpose:
- Ensure that the app works correctly from a user perspective (end-to-end).

## Folder `tests/fixtures`

The `tests/fixtures` folder contains reusable test data and helper files.

Currently:
- `dummyData.js`: Example modules with different status values (`STATUS.TODO`, `STATUS.IN_PROGRESS`, `STATUS.DONE`), used by the E2E tests.

Purpose:
- Central collection of test data so it does not need to be duplicated in each test.

Notes:
- Place new shared test data here.
- Keep the data structure as stable as possible, because multiple tests may depend on it.

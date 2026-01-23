# Tests Documentation

## Overview

All tests are located in the [tests](../tests) folder.

Structure:
- [tests/e2e](../tests/e2e) – End-to-end tests using Playwright
- [tests/fixtures](../tests/fixtures) – Reusable test data and helper files
- [tests/playwright.config.js](../tests/playwright.config.js) – Playwright configuration

## Folder `tests/e2e`

The `tests/e2e` folder contains Playwright end-to-end tests.

Currently:
- [tests/e2e/tasks.e2e.spec.js](../tests/e2e/tasks.e2e.spec.js): Tests task list initialization and filtering (status filter, search filter, combined filters) using dummy data from `tests/fixtures`.
- [tests/e2e/status-history.e2e.spec.js](../tests/e2e/status-history.e2e.spec.js): Tests task status persistence and history (archive) behavior across page reloads.

Purpose:
- Ensure that key user-facing flows (loading tasks, filtering by status and search, and preserving status/history) remain stable.

## Folder `tests/fixtures`

The `tests/fixtures` folder contains reusable test data and helpers.

Currently:
- [tests/fixtures/dummyData.js](../tests/fixtures/dummyData.js): Example modules with different status values (as strings), used by the E2E tests.

Purpose:
- Central place for test data so it does not need to be duplicated in each test.

Guidelines:
- Add new shared test data here.
- Keep the data structure as stable as possible, as multiple tests may depend on it.

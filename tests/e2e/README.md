# Ordner `tests/e2e`

In diesem Ordner liegen End‑to‑End‑Tests (E2E), aktuell mit Playwright.

## Test Data Strategy

The E2E tests use **dummy test data** from `tests/fixtures/dummyData.js` instead of the real `module.json` file. This ensures:

- **Predictable test scenarios**: Tests always run against known data
- **No side effects**: Real production data remains untouched
- **Isolated testing**: Tests don't depend on external file changes

## How It Works

1. **Test Setup** (`beforeEach`):
   - Intercepts HTTP requests to `module.json`
   - Responds with test data from `dummyData.js`
   - Injects test data into `localStorage`
   - Reloads the page to trigger normal app flow

2. **Test Execution**:
   - The app runs normally but uses test data
   - All DOM interactions are real (true E2E)
   - Filters, searches, and UI interactions work as in production

3. **Production vs Tests**:
   - **Production**: App loads real `module.json` from server
   - **Tests**: Playwright intercepts and provides test data
   - Same codebase, different data sources

## Adding New Test Data

Edit `tests/fixtures/dummyData.js` to add or modify test modules. Make sure the structure matches `module.json`:

```javascript
{
  id: number,
  title: string,
  category: string,
  status: "todo" | "in progress" | "done",
  description: string,
  default: boolean
}
```

Aktuell enthalten:
- `tasks.e2e.spec.js`: Tests filtering and search functionality with dummy data

Ziel:
- Überprüfen, dass die Anwendung aus Nutzersicht bzw. "Ende‑zu‑Ende" korrekt funktioniert.

Richtlinien:
- Neue E2E‑Tests hier ablegen.
- Nach Möglichkeit bestehende Fixtures aus `tests/fixtures` wiederverwenden.

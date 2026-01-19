# Ordner `tests/e2e`

In diesem Ordner liegen End‑to‑End‑Tests (E2E), aktuell mit Playwright.

Aktuell enthalten:
- `groupByStatus.spec.js`: Testet die Funktion `groupByStatus`, indem die Dummy‑Daten aus `fixtures/` verwendet und die Gruppenbildung nach Status überprüft werden.

Ziel:
- Überprüfen, dass die Anwendung aus Nutzersicht bzw. "Ende‑zu‑Ende" korrekt funktioniert.

Richtlinien:
- Neue E2E‑Tests hier ablegen.
- Nach Möglichkeit bestehende Fixtures aus `tests/fixtures` wiederverwenden.

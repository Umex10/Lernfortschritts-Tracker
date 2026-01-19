# Tests – Übersicht

Dieses Dokument beschreibt grob die Teststruktur des Projekts, speziell die E2E-Tests und die dazugehörigen Fixtures.

## Ordner `tests/e2e`

In `tests/e2e` liegen End-to-End-Tests (E2E), aktuell mit Playwright.

Aktuell:
- `groupByStatus.spec.js`: Testet die Funktion `groupByStatus` mit den Dummy-Daten aus `tests/fixtures` und prüft die Gruppierung nach Status.

Zweck:
- Sicherstellen, dass die App aus Nutzersicht (Ende-zu-Ende) korrekt funktioniert.

## Ordner `tests/fixtures`

In `tests/fixtures` liegen wiederverwendbare Testdaten und Hilfsdateien.

Aktuell:
- `dummyData.js`: Beispiel-Module mit unterschiedlichen Status-Werten (`STATUS.TODO`, `STATUS.IN_PROGRESS`, `STATUS.DONE`), genutzt u.a. in den E2E-Tests.

Zweck:
- Zentrale Sammlung von Testdaten, damit sie nicht in jedem Test dupliziert werden müssen.

Hinweis:
- Neue gemeinsame Testdaten hier ablegen.
- Struktur der Daten möglichst stabil halten, weil mehrere Tests darauf zugreifen können.

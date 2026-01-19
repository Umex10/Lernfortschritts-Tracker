# Doku: Ordner `public`

## Ordner `public/constants`
In `public/constants` liegen Konstanten, die im Frontend mehrfach verwendet werden.

Aktuell:
- `status.js`: Zentrale Definition der möglichen Lernstatus (`STATUS.TODO`, `STATUS.IN_PROGRESS`, `STATUS.DONE`).

Zweck:
- Gemeinsamer Ort für Werte wie Enums/Konfigurationen.
- Vermeidet Magic Strings im Code und stellt sicher, dass alle Module dieselben Status-Werte verwenden.

Hinweis:
- Neue, wiederverwendete Konstanten hier ablegen.
- Namen stabil halten, da z.B. Tests darauf zugreifen.

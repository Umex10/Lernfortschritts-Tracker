# Ordner `constants`

In diesem Ordner liegen gemeinsame Konstanten, die im Frontend mehrfach benötigt werden.

Aktuell enthalten:
- `status.js`: Zentrale Definition der möglichen Lernstatus (`STATUS.TODO`, `STATUS.IN_PROGRESS`, `STATUS.DONE`).

Ziel:
- Ein einheitlicher Ort für solche "Enums" und Konfigurationen.
- Verhindert Magic Strings im Code und sorgt dafür, dass alle Module dieselben Werte verwenden.

Richtlinien:
- Neue Konstanten hier hinzufügen, wenn sie von mehreren Dateien verwendet werden.
- Bezeichner möglichst sprechend und stabil halten, da Tests darauf zugreifen.

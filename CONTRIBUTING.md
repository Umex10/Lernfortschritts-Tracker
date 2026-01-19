# Contributing Guidelines

Vielen Dank, dass du zum Projekt beitragen möchtest! Bitte halte dich an die folgenden Regeln, um die Zusammenarbeit für alle sauber und effizient zu gestalten.

---
## Server starten

### Verfügbare Befehle

Es gibt zwei Möglichkeiten, den Server zu starten:

- **`npm run dev`** – Startet den Server im **Entwicklungsmodus** mit automatischem Neuladen bei Dateiänderungen (verwendet `nodemon`)
- **`npm run start`** – Startet den Server im **Produktionsmodus** ohne automatisches Neuladen

### Unterschied zwischen `dev` und `start`

- **`npm run dev`**: Für die **Entwicklung** gedacht. Der Server startet neu, sobald du Änderungen an den Dateien vornimmst. Das spart Zeit, da du den Server nicht manuell neu starten musst.
- **`npm run start`**: Für den **produktiven Einsatz** gedacht. Der Server läuft stabil und startet nicht automatisch neu.

### Automatische Installation der Abhängigkeiten

**Beide Befehle führen automatisch `npm install` aus**, bevor der Server gestartet wird. Du musst also nicht manuell `npm install` ausführen – die Abhängigkeiten werden bei jedem Start aktualisiert.

---
## Branching-Strategie

- Arbeite **immer auf deinem eigenen Branch**.
- Wähle deinen Namen als **Branch-Namen**, z. B. `thomas`.

---

## Workflow

1. **Entwicklung auf dem eigenen Branch**
   - Alle Änderungen werden zunächst in deinem eigenen Branch umgesetzt.
   - Stelle sicher, dass dein Code **funktioniert** und keine offensichtlichen Fehler enthält.

2. **Merge in `develop`**
   - Sobald dein Feature oder Bugfix fertig ist, merge deinen Branch in `develop`.
   - **Konflikte müssen vorher gelöst** werden, bevor der Merge abgeschlossen wird.
   - Der Merge sollte **erst nach eigenem Test** durchgeführt werden.

3. **Code Review & Merge in `main`**
   - Änderungen auf `main` erfolgen **nur nach Review durch das gesamte Team**.
   - Ziel: **Qualität sichern und Fehler vermeiden**.
   - Nach erfolgreichem Review kann dein Code in `main` gemerged werden.

---

## Code-Qualität

- Schreibe **sauberen und lesbaren Code**.
- Achte auf **einheitliche Formatierung** und Stilrichtlinien.
- Teste deinen Code, bevor du einen Pull Request erstellst.

---

## Pull Requests

- Erstelle einen **klaren und verständlichen Pull Request**.
- Beschreibe **kurz, was geändert wurde** und **warum**.
- Verweise auf **relevante Issues** (falls vorhanden).

---

## Verhalten im Team

- Sei **respektvoll** und **hilfsbereit** im Review-Prozess.
- Feedback wird **konstruktiv** gegeben und sollte **akzeptiert** werden.
- Ziel ist eine **effiziente und angenehme Zusammenarbeit**.

---

Vielen Dank für deine Mitarbeit! 🚀

# Contributing Guidelines

Thank you for contributing to this project! Please follow these guidelines to keep collaboration clean and efficient for everyone.

---
## Starting the Server

### Available Commands

There are two main ways to start the server:

- **`npm run dev`** – Starts the server in **development mode** with automatic reload on file changes (uses `nodemon`).
- **`npm run start`** – Starts the server in **production mode** without automatic reload.

### Difference Between `dev` and `start`

- **`npm run dev`**: Intended for **development**. The server restarts automatically when you change files, so you do not need to restart it manually.
- **`npm run start`**: Intended for **production-like usage**. The server runs stably and does not restart automatically.

### Automatic Dependency Installation

**Both commands run `npm install` automatically** before starting the server. You do not need to run `npm install` manually – dependencies are ensured on each start.

---
## Branching Strategy

- Always work on **your own branch**.
- Use your name as the **branch name**, e.g. `thomas`.

---

## Workflow

1. **Develop on your own branch**
   - Implement all changes on your personal branch first.
   - Make sure your code **works** and does not contain obvious errors.

2. **Merge into `develop`**
   - Once your feature or bugfix is ready, merge your branch into `develop`.
   - **Resolve conflicts beforehand** before completing the merge.
   - Only merge after you have **tested your changes**.

3. **Code Review & Merge into `main`**
   - Changes to `main` happen **only after review by the whole team**.
   - Goal: **Ensure quality and avoid regressions**.
   - After a successful review, your code can be merged into `main`.

---

## Code Quality

- Write **clean and readable code**.
- Keep **consistent formatting** and follow existing style conventions.
- Test your code before creating a pull request.

---

## Pull Requests

- Create a **clear and understandable pull request**.
- Briefly **describe what you changed** and **why**.
- Reference **related issues** (if any).

---

## Team Collaboration

- Be **respectful** and **helpful** during reviews.
- Give feedback **constructively** and be open to receiving it.
- The goal is an **efficient and pleasant collaboration**.

---

## Documentation

To keep documentation consistent, follow this structure:

- Central area documentation is located in the [docs](docs) folder.
  - Frontend / static files: [docs/public.md](docs/public.md)
  - Tests / Playwright / fixtures: [docs/tests.md](docs/tests.md)
- Specific documentation for individual folders lives as a README.md directly in that folder (e.g. [public/constants/README.md](public/constants/README.md)).

Guidelines:
- If you add new functionality to an existing area (e.g. tests, public), extend the appropriate file under [docs](docs).
- If you create a new subfolder with reusable code, add a README.md there describing the purpose, key files, and conventions.
- Whenever possible, link new docs from the central [README.md](README.md) or from [docs](docs) so they are easy to find.

---

Thank you for your contribution! 🚀

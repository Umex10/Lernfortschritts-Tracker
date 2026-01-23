# Documentation: `public` Folder (Legacy Overview)

This file provides a short legacy overview. For the most up-to-date and detailed documentation of the `public` folder, see:

- [docs/public.md](docs/public.md)

Key points:
- The `public` folder contains all browser-loaded assets (HTML, CSS, JS).
- Status values are defined centrally in `src/constants/status.js` as `STATUS.TODO`, `STATUS.IN_PROGRESS`, `STATUS.DONE`.
- Shared constants help avoid magic strings and keep browser code and tests in sync.

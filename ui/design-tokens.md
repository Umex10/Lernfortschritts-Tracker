# Design Tokens – Learning Progress Tracker

These tokens describe the visual baseline for the UI. They are meant as implementation guidance.

## Typography
- Base font size: `16px`
- Font weights:
  - Normal: `400`
  - Medium: `500`

## Colors (Light theme)
- Background: `#ffffff`
- Foreground (text): `oklch(0.145 0 0)`
- Card:
  - Background: `#ffffff`
  - Text: `oklch(0.145 0 0)`
- Popover:
  - Background: `oklch(1 0 0)`
  - Text: `oklch(0.145 0 0)`

### Brand / Actions
- Primary: `#030213`
- Primary foreground: `oklch(1 0 0)`
- Secondary: `oklch(0.95 0.0058 264.53)`
- Secondary foreground: `#030213`
- Accent: `#e9ebef`
- Accent foreground: `#030213`
- Muted: `#ececf0`
- Muted foreground: `#717182`
- Destructive: `#d4183d`
- Destructive foreground: `#ffffff`

### Borders & Inputs
- Border: `rgba(0, 0, 0, 0.1)`
- Input background: `#f3f3f5`
- Switch background: `#cbced4`
- Focus ring: `oklch(0.708 0 0)`

## Radius
- Base radius: `0.625rem` (10px)
- Derived radii:
  - `sm`: `calc(radius - 4px)`
  - `md`: `calc(radius - 2px)`
  - `lg`: `radius`
  - `xl`: `calc(radius + 4px)`

## Status Colors (UI-specific)
The design system provides generic “chart” colors. Use a consistent mapping for status pills and progress indicators:

- Not started: neutral (use `muted` / `muted-foreground`)
- In progress: highlight (recommend mapping to `chart-1` or `chart-4`)
- Done: success (recommend mapping to `chart-2`)

Chart palette available:
- Chart 1: `oklch(0.646 0.222 41.116)`
- Chart 2: `oklch(0.6 0.118 184.704)`
- Chart 3: `oklch(0.398 0.07 227.392)`
- Chart 4: `oklch(0.828 0.189 84.429)`
- Chart 5: `oklch(0.769 0.188 70.08)`

## Layout (recommended)
These are UI layout conventions to keep the app readable on mobile and desktop:
- Content max width (desktop): ~`900px`
- Page padding:
  - Mobile: `16px`
  - Desktop: `24px`
- Spacing scale: 8px grid (`8 / 16 / 24 / 32`)

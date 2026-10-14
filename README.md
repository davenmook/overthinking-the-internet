# Overthinking the Internet

Source for [davenoel.me](https://davenoel.me), the personal site of Dave Noel: professional overthinker of your internet connection.

Plain HTML and CSS. No framework, no build step. Analytics, session replay and experiments run on PostHog (one script tag in each page head).

## What's where

| Path | What it is |
| --- | --- |
| `index.html` | Homepage |
| `about.html`, `talks.html` | About and Talks pages |
| `stories/` | Data stories, one page each |
| `assets/css/site.css` | All styles. Brand colors live at the top under `:root` |
| `assets/fonts/` | Self-hosted fonts (Bricolage Grotesque, IBM Plex Sans, JetBrains Mono; SIL Open Font License) |
| `assets/img/og/` | Link-preview images (1200 × 630) for LinkedIn and other shares |

## Brand

Carbon `#131517` background, text `#ECEEEF`, sage green accent `#A9C4A1`, teal glow `#33A6B8`, muted `#8E9499`.

## Data

Every chart credits its source. Story data comes from public sources only.

Views are my own.

## Light and dark themes

Dark is the default. Visitors can switch to light ("Paper and Sage") with the sun/moon button in the nav; the choice is saved in their browser and logged to PostHog as `theme_toggled`.

- Theme colors live in `assets/css/site.css` (`:root` for dark, `html[data-theme="light"]` for light). The toggle is `assets/js/theme.js`, plus a one-line script in each page's `<head>` so there's no flash of the wrong theme.
- Inline SVG charts recolor automatically as long as they use the palette hexes (`#ECEEEF`, `#C9CDD0`, `#8E9499`, `#A9C4A1`, `#33A6B8`, `#6B7177`, `#4A5056`, `#2A2E33`, `#3A3F45`, `#D0912A`). A new color needs a light mapping in `site.css`.
- **Before every deploy, check new or changed pages in both themes.** Keep site charts as inline SVG; PNG charts don't recolor.
- Rollback: the last dark-only version is git tag `dark-only-2026-10-14` (and `backups/davenoel.me_dark-only_2026-10-14.zip`).

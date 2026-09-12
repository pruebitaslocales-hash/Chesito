# AGENTS.md — La Receta de Nuestra Amistad

## Project Overview
Interactive 3D book-flip album web app (single-page). Pure HTML/CSS/JS, no build tools, no frameworks. Content in JSON, served via XAMPP/Apache.

## Architecture
- `index.html` — clean HTML shell, loads `css/styles.css` + `js/app.js`
- `css/styles.css` — all styles (pure CSS, no Tailwind)
- `js/app.js` — all JS (state, fetch, render, interactions)
- `data/receta.json` — content data (fetched at runtime with anti-cache `?v=Date.now()`)
- `fotos/` — photo assets (`receta-1.jpg` through `receta-4.jpg`, `chef.jpg`)
- `music/fondo.mp3` — background ambient audio

**No build step. No npm. No bundler. Edit files directly.**

## Dev Server
- XAMPP Apache at `http://localhost/Chesito/`
- No hot reload — hard-refresh browser after edits
- `fetch()` requires HTTP server (won't work with `file://`)

## Key Conventions

### CSS
- Variables defined in `:root` — palette from `DESING.md` (L'Étoile Fraternelle)
- 3D book flip: `.leaf` rotates via `rotateY(-180deg)` with `transform-origin: left center`
- `.leaf` has NO `overflow:hidden` (fixes mirror bug) — scroll lives in `.face-inner` child
- Responsive breakpoints at 768px and 480px

### JS
- **Direct DOM mutation** for interactions (mise, photos, letters, voucher, quiz) — no `renderPage()` re-render
- `renderPage()` only used for navigation (flip leaves, update progress)
- Content loaded via `fetch('data/receta.json')` with `DEFAULTS` fallback
- Progress persisted in `localStorage` key `recetaProgreso`
- Confetti uses `<canvas>` (not external library)
- Sounds via Web Audio API (synthesized, no audio files for SFX)
- Music via `<audio id="bgMusic">` element

### Data
- Edit `data/receta.json` to change content (text, photos, letters, quiz)
- `DEFAULTS` object in `app.js` is fallback if fetch fails — keep in sync
- Photo paths must match filenames in `fotos/` directory

## Gotchas
- `js/script.js` is legacy (dead code) — do not reference
- Google Fonts loaded via `<link>` in `<head>` — no `@import`
- Chef note uses absolute positioning (upper-right of cover) — z-index matters
- Progress bar fixed at top — z-index 150
- Modal overlay z-index 200, confetti canvas z-index 300

## Content Editing
- All user-facing text lives in `data/receta.json`
- To add photos: place files in `fotos/`, update `src` paths in JSON
- To add letters: add objects to `cartas` array in JSON
- Quiz options are in `quiz[0].opts` array
- Ticket items in `ticketItems` array

## File Sizes (reference)
- `index.html`: ~61 lines
- `css/styles.css`: ~275 lines
- `js/app.js`: ~586 lines
- `data/receta.json`: ~108 lines

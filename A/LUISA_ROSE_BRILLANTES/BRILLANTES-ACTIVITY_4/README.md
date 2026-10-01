# Luisa Rose Brillantes — Portfolio

A personal portfolio website for Luisa Rose D. Brillantes, a 3rd-year BS Information Technology student (Cybersecurity major) at West Visayas State University. Built with plain HTML, CSS, and JavaScript — no frameworks or build tools required. This project was created with AI-assisted guidance to help with design refinement, layout improvements, and asset generation.

## Project Structure

```
luisa-rose-brillantes---portfolio/
├── index.html   # Main page (all sections: Hero, About, Projects, Resume, Contact)
├── styles.css   # All styling, including responsive/mobile layout
└── script.js    # Mobile nav toggle + footer year auto-update
```

## How to Run

### Option 1 — Python local server (recommended)

1. Open a terminal in the project folder.
2. Run:
   ```powershell
   py -m http.server 8000 --bind 127.0.0.1
   ```
3. Open your browser and go to:
   ```
   http://127.0.0.1:8000
   ```

> Python 3.14+ binds to IPv6 (`[::]`) by default, which causes `ERR_ADDRESS_INVALID` in most browsers. The `--bind 127.0.0.1` flag forces IPv4 and fixes this.

### Option 2 — Open directly in browser

Right-click `index.html` → **Open With** → choose your browser.

This works for basic viewing since the project has no fetch calls or ES modules, but the Python server approach is preferred.

### Option 3 — Live Server (VS Code / Kiro)

If you have the **Live Server** extension installed, right-click `index.html` → **Open with Live Server**. It will auto-reload on file saves.

## Sections

| Section  | Description                                              |
|----------|----------------------------------------------------------|
| Hero     | Introduction, CTA buttons, and stat highlights           |
| About    | Background blurb and education details                   |
| Projects | 5 featured projects with tech stack tags                 |
| Resume   | Core skills and tools/tech chips                         |
| Contact  | Email, phone, location, GitHub and LinkedIn links        |

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, CSS Grid, responsive breakpoints, `backdrop-filter`
- **JavaScript (vanilla)** — mobile menu toggle, dynamic copyright year
- **Google Fonts** — Inter (loaded via CDN)

## Responsive Behavior

- `≤ 860px` — single-column layout for hero, about, resume, and projects (2-col grid)
- `≤ 640px` — hamburger nav, single-column projects grid

## HTML Validation

The HTML has been validated with [html-validate](https://html-validate.org/) — 0 errors, 0 warnings.

Fixes applied:
- Removed self-closing syntax (`/>`) from void elements (`<meta>`, `<link>`)
- Added `type="button"` to the mobile nav toggle `<button>`
- Encoded all raw `&` characters as `&amp;` throughout the document

## Notes

- No dependencies or `npm install` needed — just open and run.
- Internet connection is required on first load for Google Fonts to render correctly (Inter font).
- The footer year updates automatically via JavaScript.

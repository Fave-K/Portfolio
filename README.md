# Portfolio

Favour Karani's personal portfolio — a single-page site built around a deep-dive
case study of Chumz, a micro-savings app grown from 30,000 to over 500,000 users.

## 🧰 Tech stack

- [Astro 7](https://astro.build) — static site, no client-side UI framework
- pnpm — package manager
- [Fontsource](https://fontsource.org) (`Sora` variable + `JetBrains Mono`) with
  [`fontaine`](https://github.com/unjs/fontaine) for fallback font metrics
- `sharp` for image processing
- `@astrojs/sitemap` for sitemap generation

## 🚀 Project structure

```text
/
├── public/                    # favicons, robots.txt
├── src/
│   ├── assets/case-study/     # Chumz case study screenshots
│   ├── components/            # hero, case-study, nav, footer, etc.
│   │   └── case-study/        # phone-screen sub-components
│   ├── data/                  # site.ts, more-work.ts
│   ├── layouts/
│   │   └── base-layout.astro
│   ├── pages/
│   │   └── index.astro        # the only route — single-page site
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in `src/pages/` and exposes each as a
route based on its file name. Static assets like favicons go in `public/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm dev`              | Starts local dev server at `localhost:4321`        |
| `pnpm build`            | Build the production site to `./dist/`             |
| `pnpm preview`          | Preview the production build locally               |
| `pnpm astro check`      | Type-check `.astro` files                          |
| `pnpm astro add <int>`  | Add an Astro integration                           |

## 👀 Want to learn more?

Check the [Astro documentation](https://docs.astro.build).

# Portfolio Web

A modern, editorial-style personal portfolio website built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**. It is a redesign of a monochrome designer-portfolio concept, split into small, reusable section components.

<!-- Add a screenshot after your first deploy:
![Portfolio preview](./docs/preview.png)
-->

## Features

- **Hero**: full-bleed intro with navbar, large serif "Hello" headline, key stats (+200 projects, +50 startups), portrait and a scroll-down cue
- **About**: short intro, a stat card (120% engagement increase), portrait, highlight bullets and a client trust badge
- **Scroll strip**: horizontally scrollable showcase of project thumbnails with hover-reveal icons
- **Experience**: timeline of roles with tags, plus a featured role with a mini image gallery and arrow button
- **CTA banner**: dark, image-backed "Exclusive Winter Deal" consultation call-out
- **Latest works**: portfolio grid with hover overlays and site-name badges
- **Blog**: "Design Insights & Trends" card grid with tags and read times
- **Final CTA** and **Footer**: closing call-to-action, navigation links and email contact
- Responsive layout and a consistent monochrome look with Playfair Display + Inter typography

## Tech Stack

| Area      | Tool                          |
| --------- | ----------------------------- |
| Framework | React                         |
| Language  | TypeScript                    |
| Build     | Vite                          |
| Styling   | Tailwind CSS                  |
| Icons     | lucide-react                  |
| Fonts     | Playfair Display, Inter       |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS or newer)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Bhuppi8/portfolio-web.git
cd portfolio-web

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the address printed in the terminal (usually `http://localhost:5173`).

## Available Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with hot reload    |
| `npm run build`   | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally           |

## Project Structure

```text
portfolio-web/
├── index.html            # Page title and font setup
├── package.json
├── src/
│   ├── App.tsx           # Composes all sections in order
│   └── components/       # One component per page section
│       ├── Hero
│       ├── About
│       ├── ScrollStrip
│       ├── Experience
│       ├── CtaBanner
│       ├── LatestWorks
│       ├── Blog
│       ├── FinalCta
│       └── Footer
└── dist/                 # Build output (generated, not committed)
```

## Customizing the Site

The text and images are placeholders from the design concept. Replace them with your own:

1. **Name, headline and stats**: edit the `Hero` and `About` components.
2. **Experience**: update the roles, dates and tags in `Experience`.
3. **Projects**: change titles, links and images in `ScrollStrip` and `LatestWorks`.
4. **Blog cards**: edit titles, tags and read times in `Blog`.
5. **Contact**: replace the sample email (`hello@dnova.com`) and nav links in `Footer`.
6. **Page title and fonts**: edit `index.html`.
7. **Images**: swap the portraits, still-life shots and 3D compositions for your own work.

## Deployment

This is a static site, so it works on any static host.

- **Vercel or Netlify**: import the GitHub repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages**: build with `npm run build`, then publish the `dist/` folder. If the site lives under a sub-path (for example `/portfolio-web/`), set `base: "/portfolio-web/"` in `vite.config`.

## Notes

- Keep `node_modules/` and `dist/` out of Git by listing them in `.gitignore`.
- Placeholder images in this project were AI-generated to match the reference design. Replace them with your own work before publishing.

## License

Choose a license for your project (for example MIT) and add it here.

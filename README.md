# Thiloth B Shetty — SAP ABAP Developer Portfolio

A premium, futuristic, fully-responsive portfolio for **Thiloth B Shetty**, SAP ABAP Developer at **IBM India Pvt. Ltd.**

Built with **React 18 + Vite + Tailwind CSS + Framer Motion**.

---

## Features

- Dark, futuristic theme with neon blue / indigo / fuchsia accents
- Fully responsive (mobile-first, auto-scaling)
- Sticky navbar with active-section highlighting + scroll-progress bar
- Animated typing roles, gradient text, particle field, glassmorphism cards
- Interactive 3D-tilt cards
- Animated ABAP code window in the hero
- Skills marquee, animated timeline, certification glow cards
- Project filter (All / Enterprise / Personal) with live + repo links
- Contact form (mailto-based, no backend required)
- Cursor-glow effect on desktop
- SEO meta tags, OpenGraph, JSON-LD person schema
- Optimized build (~102 KB gzipped JS)

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (output: ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Personalize

### 1. Profile photo

Drop your photo at:

```
public/profile.jpg
```

It will automatically replace the animated SVG fallback in the hero.
(PNG also works if you rename the import in `src/components/ProfileImage.jsx`.)

### 2. Resume

Drop your resume PDF at:

```
public/resume.pdf
```

The "Resume" button in the hero already links to `./resume.pdf`.

### 3. Content

All content lives in **one place**:

```
src/data/portfolio.js
```

Edit the `profile`, `stats`, `skillGroups`, `experience`, `certifications`,
`achievements`, `projects`, and `education` arrays freely.

---

## Project structure

```
Portfolio/
├── index.html                 SEO + meta + fonts
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── profile.jpg           (you add this)
│   └── resume.pdf            (you add this)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css             Tailwind + design tokens
    ├── data/
    │   └── portfolio.js      Single source of truth
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Certifications.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── ProfileImage.jsx
        ├── AbapCodeWindow.jsx
        ├── Typing.jsx
        ├── TiltCard.jsx
        ├── Particles.jsx
        ├── ScrollProgress.jsx
        ├── CursorGlow.jsx
        └── SectionHeading.jsx
```

---

## Deploy

### Vercel (recommended)

1. Push to GitHub.
2. Import the repo on [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Vite — no config needed. Just deploy.

### Netlify

1. Push to GitHub.
2. New site from Git on Netlify.
3. **Build command:** `npm run build` · **Publish directory:** `dist`

### GitHub Pages

```bash
npm run build
# Then publish ./dist via gh-pages, e.g.:
npx gh-pages -d dist
```

The `base: './'` in `vite.config.js` makes assets work from any subpath
(GitHub Pages, sub-folder hosting, etc.).

---

## Tech stack

| Layer        | Used                              |
| ------------ | --------------------------------- |
| Framework    | React 18                          |
| Bundler      | Vite 5                            |
| Styling      | Tailwind CSS 3                    |
| Animations   | Framer Motion 11                  |
| Icons        | lucide-react                      |
| Fonts        | Inter, Poppins, Space Grotesk     |

---

## Contact

- Email: [thilothb@gmail.com](mailto:thilothb@gmail.com)
- Phone: +91 94460 15365
- LinkedIn: [thiloth-b-shetty](https://www.linkedin.com/in/thiloth-b-shetty)
- GitHub: [@thiloth](https://github.com/thiloth)

— Engineered with ♥ for enterprise SAP backend craft.

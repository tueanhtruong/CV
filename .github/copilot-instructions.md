# CV Portfolio — Copilot Instructions

Next.js 10 personal portfolio/CV site using theme-ui for styling and a custom context factory pattern for state.

## Build & Dev

```bash
npm run dev       # development server → http://localhost:3000
npm run build     # production build (runs next-sitemap postbuild)
npm run serve     # start production server
npm run export    # static export → /out (used by Netlify)
```

Deploys to **Netlify** (`next build && next export`) and **Vercel** (serverless).

## Architecture

```
src/
  pages/      # Next.js pages — wraps sections with ThemeProvider + context providers
  sections/   # Page sections (Banner, Workflow, CtaTwo, etc.) — one file per section
  components/ # Reusable UI primitives (layout, seo, image, block-title, etc.)
  contexts/   # State via custom context factory (app/sticky, video, drawer)
  theme/      # theme-ui design tokens (index.js) — single source of truth for styles
  assets/cv/  # CV/resume files
```

## Theming (theme-ui)

All styling goes through theme-ui's `sx` prop. Never use plain CSS files or CSS modules for component styles.

**Responsive values** use arrays (mobile-first): `fontSize: ["16px", null, null, "20px"]`  
Breakpoints: `376px | 576px | 768px | 992px | 1200px | 1441px`

Key design tokens in [src/theme/index.js](../src/theme/index.js):

- Primary color: `#0361d0`, Dark navy: `#02073E`, Border: `#E9EDF5`
- Font: DM Sans (via `typeface-dm-sans`)
- Text variants: `heroPrimary`, `heroSecondary`, `title`, `lead`, `muted`
- Section variants: `banner`, `feature`, `workflow`, `product`, `offer`, `package`, `faq`

## Component Conventions

- Style objects defined as a `const styles = { ... }` at the bottom of each file, passed via `sx` prop
- Use theme-ui primitives (`Box`, `Flex`, `Grid`, `Text`, `Heading`, `Image`) — not raw HTML elements
- Spread `...rest` props on the root element to allow `sx` overrides from parent
- Sections use `<Box as="section" id="anchorId">` for semantic HTML + scroll-link anchoring
- Nav scroll targets must match section IDs defined in [src/components/header/header.data.js](../src/components/header/header.data.js)

## Context / State

State is managed via a **custom context factory** in [src/contexts/create-context.js](../src/contexts/create-context.js):

```js
const [useStateHook, useDispatchHook, Provider] = useCreateContext(
  initialState,
  reducer,
);
```

- `useStateHook(property)` — single-level property selector only (no nested paths)
- Keep context state flat; add new actions in the reducer file, not inline
- Available contexts: `StickyProvider` (header sticky), `VideoProvider` (modal video/lightbox), `DrawerProvider` (mobile nav)

Provider nesting order in pages: `ThemeProvider → StickyProvider → VideoProvider → Layout`

## Data Separation

Section data (arrays, carousel config) lives in a separate variable or file, not inline in JSX:

```js
// Good — data decoupled from render
const workflowData = [ { id: 1, title: "...", items: [...] } ];
export default function Workflow() { return workflowData.map(...) }
```

Header/footer links are in `*.data.js` files beside their component. Update navigation there.

## Key Libraries

| Library                  | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `theme-ui ^0.3`          | All styling — sx prop, variants, design tokens |
| `framer-motion ^2`       | Animations                                     |
| `react-reveal`           | Scroll-reveal effects                          |
| `swiper ^6`              | Carousels (FavoriteCourse section)             |
| `react-stickynode`       | Sticky header                                  |
| `react-waypoint`         | Scroll-position triggers                       |
| `react-modal-video`      | Video modal                                    |
| `react-awesome-lightbox` | Image lightbox                                 |
| `react-icons`            | Icon set (fa, fi, bi prefixes)                 |
| `next-optimized-images`  | Image optimization at build time               |

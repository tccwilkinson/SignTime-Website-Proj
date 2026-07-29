CLAUDE.md — SignTime Website
Project Setup
React 19 + Vite 6, react-router-dom. Deployed to GitHub Pages.
Dev server: npm run dev → http://localhost:3001
Build: npm run build → outputs to docs/ (not dist/)
If a dev server is already running, do not start a second one.
Always Do First
Invoke the frontend-design skill before writing any frontend code, every session, no exceptions.
Deployment — Read Before Pushing
There is no CI workflow. GitHub Pages serves the committed docs/ folder directly from the main branch.
Source changes alone do nothing to the live site. The build must be run and docs/ must be committed.
Always deploy with a single command: npm run deploy (runs build, stages docs/, commits, pushes).
Never push a frontend change without rebuilding first.
GitHub Pages Constraints
base in vite.config.js must stay '/SignTime-Website-Proj/' — it matches the repo name. Do not change it.
Never hardcode absolute asset paths like /logo.svg. Import assets, or use import.meta.env.BASE_URL.
Routing uses <HashRouter>, not <BrowserRouter> — this avoids GitHub Pages' lack of server-side rewrites, so no basename is needed. Do not switch to <BrowserRouter>; nested routes will go blank in production.
The build copies index.html to docs/404.html. This is the SPA fallback for direct navigation — do not remove it.
emptyOutDir: true wipes docs/ on every build. Anything that must persist there (.nojekyll, CNAME) goes in public/ instead.
A blank white page in production means the base path, the basename, or a stale build. Check those three before debugging anything else.
Design System — Do Not Invent
Established palette: dark navy/plum gradients, coral accent, white/off-white text.
Use the existing tokens. Do not introduce new brand colors, fonts, or spacing scales without being asked.
If a brand_assets/ folder exists, check it first and prefer real assets over placeholders.
Screenshot & Review Workflow
Always review against the running dev server at http://localhost:3001. Never screenshot a file:/// URL.
Use the browser tools to load the page and screenshot. There is no screenshot.mjs or serve.mjs in this repo — do not look for them.
Do at least two comparison rounds: screenshot, identify specific mismatches, fix, re-screenshot.
Be specific when comparing: "heading is 32px, should be ~24px", "card gap is 16px, should be 24px".
Check every pass: spacing/padding, font size/weight/line-height, exact hex colors, alignment, border-radius, shadows, image sizing.
Delete old screenshots when a design round is finished. Images are expensive to keep in context.
Craft Guardrails
Colors: Never default Tailwind palette (indigo-500, blue-600, etc.). Derive from existing brand colors only.
Shadows: Never flat shadow-md. Layered, color-tinted, low opacity.
Typography: Different fonts for headings and body. Tight tracking (-0.03em) on large headings, generous line-height (1.7) on body.
Gradients: Layer multiple radial gradients. Add grain via SVG noise filter for depth.
Animations: Only transform and opacity. Never transition-all. Spring-style easing.
Interactive states: Every clickable element gets hover, focus-visible, and active states. No exceptions.
Images: Gradient overlay plus a color treatment layer with mix-blend-multiply.
Spacing: Consistent spacing tokens, not arbitrary steps.
Depth: Maintain a layering system (base → elevated → floating). Not everything on one z-plane.
Responsive: Mobile-first. Check the hero and nav at 375px width every pass.
Hard Rules
Do not restructure the project into a single file. This is a component-based React app.
Do not change base, outDir, or the 404.html copy step without saying so explicitly.
Do not add sections, features, or copy that weren't asked for.
Do not use transition-all.
Do not stop after one screenshot pass.
Do not reference Vercel. The site is not deployed there.

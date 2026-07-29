# SignTime — Design System Reference

Factual snapshot of the design system as implemented in `src/` as of this audit. This document describes what exists, not what should change.

## 1. Stack & structure

- React 19 + Vite 6, `react-router-dom` with `HashRouter` (`src/main.jsx`).
- Global tokens + base styles: `src/index.css` (loaded first).
- A second, smaller token layer: `src/styles/tokens.css`, consumed only by `src/components/ui/*`. Its own header comment states it "never redefines or overrides anything in `src/index.css`'s `:root`."
- A small tokenized component kit lives in `src/components/ui/` (`Button`, `Card`, `Section`, `SectionHeader`, `PageHero`), each paired with its own `.css` file.
- Most page files (`src/pages/*.jsx`) do **not** use the UI kit. They write one-off inline `style={{ ... }}` objects directly in JSX, mixing raw px/rem values with `var(--token)` references. Only `Home.jsx` is composed entirely from shared components with zero inline styling of its own.
- Fonts are loaded via a `<link>` in `index.html` (Google Fonts), not self-hosted.

## 2. Colors

### 2.1 Core palette — `src/index.css` `:root` (lines 6–21)

| Token | Hex / value | Notes |
|---|---|---|
| `--navy` | `#16213E` | primary brand/ink color for dark surfaces, headings |
| `--navy-dark` | `#0D1730` | darker navy step (hover states, dark cards) |
| `--navy-light` | `#233055` | lighter navy step (borders on dark panels) |
| `--ink` | `#1E293B` | primary body text color |
| `--paper` | `#FFFFFF` | page background |
| `--sky` | `#EAF2FC` | pale blue fill (badges, highlight panels) |
| `--sky-hover` | `#D7E6F7` | hover state for sky fills |
| `--skyline` | `#D7E6F7` | identical value to `--sky-hover`; used for borders/hover accents |
| `--coral` | `#E8604C` | accent/brand color |
| `--coral-dark` | `#D14B38` | coral hover state |
| `--coral-glow` | `rgba(232, 96, 76, 0.35)` | glow/shadow tint |
| `--slate` | `#5B6472` | muted text |
| `--line` | `#E6E9EF` | default border color |
| `--emerald` | `#10B981` | defined but rarely referenced (see §2.4) |

### 2.2 Derived/semantic tokens

| Token | Value | Derivation |
|---|---|---|
| `--surface-dark` | `var(--navy)` | |
| `--surface-dark-deep` | `#090E1A` | darkest navy step, not aliased to `--navy-dark` |
| `--surface-dark-deep-rgb` | `9, 14, 26` | rgb form of the above, for `rgba()` use |
| `--surface-light` | `#FDFBF8` | off-white — **not** the same hex as `--paper` (`#FFFFFF`) |
| `--accent` | `var(--coral)` | |
| `--accent-rgb` | `232, 96, 76` | |
| `--accent-hover` | `var(--coral-dark)` | |
| `--accent-muted` | `rgba(var(--accent-rgb), 0.14)` | |
| `--text-primary` | `var(--ink)` | |
| `--text-muted` | `var(--slate)` | |
| `--text-inverse` | `#EDF1F7` | near-white for text on dark surfaces |
| `--text-inverse-muted` | `rgba(237, 241, 247, 0.68)` | |
| `--hero-bloom-accent` | `rgba(232, 96, 76, 0.40)` | hero backdrop glow |
| `--hero-bloom-slate` | `rgba(91, 100, 114, 0.32)` | hero backdrop glow |
| `--hero-vignette` | `rgba(9, 14, 26, 0.46)` | hero backdrop vignette |

Shadows, radii, and transition tokens are covered in §4.3 and §7.

### 2.3 Hex colors used outside the token system

These are hardcoded directly in JSX `style={}` props or component `<style>` blocks rather than referencing a `var(--token)`. Counts are approximate occurrence totals across `src/`.

| Hex | ~Count | Where used |
|---|---|---|
| `#fff` | 188 | Pervasive — used as a literal instead of `var(--paper)`/`var(--surface-light)`/`var(--text-inverse)` in nearly every page and component file |
| `#ffffff` | 6 | `Footer.jsx`, `SignTimeLogo.jsx` default prop values — same color as `#fff` above, different casing/format |
| `#FFFFFF` | 2 (outside tokens.css/index.css `:root`) | mixed casing of the same white, e.g. `Card.css`/`tokens.css` |
| `#9BAAC7` | 24 | Muted text-on-dark color — used in `Footer.jsx`, `DemoModal.jsx`, `Hero.jsx`, `CaseStudyTemplate.jsx`, `Navbar.jsx`, `FeatureDetail.jsx`, `Pricing.jsx`, `Security.jsx`, `Partners.jsx`, `CustomersHub.jsx`, `ResourceArticleStub.jsx` — functions like an unofficial "text-inverse-muted" but is never aliased to the actual `--text-inverse-muted` token |
| `#DCEAFC` | 19 | Light-blue radial-gradient start color for page hero backgrounds. Appears as the literal string `radial-gradient(circle at 50% -10%, #DCEAFC 0%, #fff 55%)` duplicated verbatim across ~10 files: `CaseStudyTemplate.jsx`, `CustomersHub.jsx`, `Features.jsx`, `FeatureDetail.jsx`, `Integrations.jsx`, `News.jsx`, `Partners.jsx`, `PageStub.jsx`, `Pricing.jsx`, `ResourceArticleStub.jsx`, `Resources.jsx`, `Security.jsx`, `SolutionDetail.jsx`, `SolutionsHub.jsx`. `tokens.css` already defines `--pagehero-compact-bg-start: #DCEAFC` for exactly this gradient (see §8) but no page uses it |
| `#0D1730` | 15 | Same value as `--navy-dark` token, but used as a raw literal (e.g. `Features.jsx` data arrays, `FlipCardCarousel.jsx`, `InteractiveCarousel.jsx`) instead of `var(--navy-dark)` |
| `#EAF2FC` | 12 | Same value as `--sky` token, used as a raw literal in `Pricing.jsx`, `Login.jsx` instead of `var(--sky)` |
| `#3B97D3` | 12 | A blue not present in the core palette at all — used for toggle/active states and stepper accents in `Pricing.jsx`, `Login.jsx`, `FeatureDetail.jsx` |
| `#FAFBFD` | 10 | Near-white card background, close to but distinct from `--surface-light` (`#FDFBF8`) — used in `CaseStudyTemplate.jsx`, `Hero.jsx`, `FeatureDetail.jsx`, `Pricing.jsx`, `PageStub.jsx`, `ResourceArticleStub.jsx`, `SolutionDetail.jsx` |
| `#F8FAFC` | 4 | Another near-white, distinct from both `--surface-light` and `#FAFBFD` — `Hero.jsx`, `Login.jsx`, `Pricing.jsx` |
| `#EEF1F5` | 3 | Light gray, `Hero.jsx` mockup skeleton bars only |
| `#F7F8FA` | 1 | Light gray, `Hero.jsx` sidebar only |
| `#E8604C` | 4 | Same value as `--coral` token, used as a raw literal instead of `var(--coral)` in `CursiveSignature.jsx` and `index.css`'s `.gradient-text-coral` |
| `#16213E` | 4 | Same value as `--navy` token, used as a raw literal in `SignTimeLogo.jsx` (as a fallback: `var(--navy, #16213E)`) |
| `#1E293B` | 3 | Same value as `--ink` token, raw literal in `index.css` header comment and `:root` itself |
| `#D7E6F7` | 2 | Same value as `--sky-hover`/`--skyline` tokens, raw literal |
| `#B7C0D6` | 2 | Muted blue-gray, `FlipCardCarousel.jsx` (card back-face description text) and `Pricing.jsx` |
| `#D0E1F0` | 2 | Pale blue, disabled-state border in two separately-implemented stepper controls in `Pricing.jsx` |
| `#FF7A65` | 1 | Lighter coral, middle stop in `CursiveSignature.jsx`'s gradient text |

Additional one-off hex values (single occurrence each, not part of any recurring pattern): `#F43F5E` (`.gradient-text-coral` end stop, `index.css`), `#22B8E6` (`CheckBadge` icon, `Pricing.jsx`), `#FFA3A3` (`CrossBadge` icon, `Pricing.jsx`), `#34D399` (extra-sends highlight text, `Pricing.jsx`), `#F4F7FC` (Login page background gradient), `#B8D5F2` (Login sandbox-banner border).

### 2.4 Special-purpose color systems (outside the brand palette)

These are self-contained color sets that don't relate to the core palette above:

- **"Under construction" banner** — `linear-gradient(90deg, #FFF3E0, #FFE0B2)` background, `#FFE082` border, `#E65100` text. Used identically in `PageStub.jsx` and `ResourceArticleStub.jsx`.
- **`TodoFlag` component** (`src/components/TodoFlag.jsx`) — `#FFF3B0` background, `#7A5900` text, `#E6C200` border. A yellow "unconfirmed fact" inline marker, distinct from the orange construction banner above. Used in `Security.jsx` and the two solutions scaffold pages.
- **Third-party SSO brand marks** (`Login.jsx`) — hand-coded SVG paths using each provider's real brand colors: Google logo (`#4285F4`, `#34A853`, `#FBBC05`, `#EA4335`) and Microsoft 365 logo (`#f35325`, `#81bc06`, `#05a6f0`, `#ffba08`). These are fixed third-party colors, not SignTime brand colors.
- **`CursiveSignature` gradient** — `linear-gradient(90deg, #E8604C, #FF7A65, #E8604C)`, a coral gradient used only for the animated cursive "SignTime" wordmark.

## 3. Typography

### 3.1 Font families

Defined tokens (`index.css` lines 47–49):

| Token | Stack |
|---|---|
| `--font-heading` | `'Plus Jakarta Sans', 'Inter', system-ui, sans-serif` |
| `--font-body` | `'Inter', system-ui, sans-serif` |
| `--font-display` | `'Newsreader', 'Plus Jakarta Sans', serif` |

`body` uses `var(--font-body)`; `h1`–`h6` use `var(--font-heading)` (`index.css` lines 77–92). `--font-display` (Newsreader, a serif) is used via `--sh-heading-font` in the `SectionHeader` component only.

`index.html` loads 14 font families total via one Google Fonts request:
`Alex Brush`, `Caveat` (600/700), `Dancing Script` (600/700), `Great Vibes`, `Herr Von Muellerhoff`, `Monsieur La Doulaise`, `Pinyon Script`, `WindSong` (500/700), `Inter` (300–800), `Plus Jakarta Sans` (500–800), `Newsreader` (regular+italic, 400–600), `Mrs Saint Delafield`.

Of these, only **Caveat, Dancing Script, and Great Vibes** are ever referenced in code — all three together, as a stacked fallback, in a single place: `CursiveSignature.jsx` line 63 (`fontFamily: '"Caveat", "Dancing Script", "Great Vibes", cursive'`). The remaining six loaded families — **Alex Brush, Herr Von Muellerhoff, Monsieur La Doulaise, Pinyon Script, WindSong, Mrs Saint Delafield** — do not appear anywhere in `src/`.

### 3.2 Base rules

- `body`: `line-height: 1.6`, color `var(--ink)`, background `var(--paper)`.
- `h1`–`h6`: `font-weight: 700`, color `var(--navy)`, `line-height: 1.25` (this is overridden per-heading almost everywhere via inline styles — see §3.4).

### 3.3 Font sizes in use

No single shared type scale exists; page headings are set with hand-written `clamp()` ranges that vary per file rather than pulling from one token. Distinct `h1`/`h2` clamp ranges found: `clamp(1.4rem, 3vw, 1.8rem)`, `clamp(1.5rem, 3vw, 1.9rem)`, `clamp(1.6rem, 3vw, 2rem)`, `clamp(1.6rem, 3.2vw, 2.1rem)`, `clamp(1.8rem, 3.4vw, 2.3rem)`, `clamp(1.8rem, 3.5vw, 2.4rem)`, `clamp(1.9rem, 3.6vw, 2.4rem)`, `clamp(1.9rem, 3.8vw, 2.6rem)`, `clamp(1.9rem, 3.4vw, 2.6rem)` (the `SectionHeader` token, `--sh-heading-size`), `clamp(2rem, 4vw, 2.6rem)`, `clamp(2rem, 4vw, 2.7rem)`, `clamp(2rem, 4.2vw, 2.8rem)`, `clamp(2.2rem, 4.5vw, 3rem)`, `clamp(2.6rem, 5.4vw, 3.6rem)` (the `PageHero` token, `--pagehero-h1-size`). 13 distinct ranges for what is functionally the same "page/section heading" role.

Body/UI text sizes in use, in rem (smallest to largest): `0.72rem, 0.75rem, 0.78rem, 0.8rem, 0.82rem, 0.85rem, 0.88rem, 0.9rem, 0.92rem, 0.95rem, 0.98rem, 1rem, 1.05rem, 1.1rem, 1.15rem, 1.2rem, 1.25rem, 1.3rem, 1.4rem, 1.5rem, 1.6rem`. Plus `2.2rem` (Pricing tier price) and `4rem` (CursiveSignature wordmark).

Body/UI text sizes in use, in px (smallest to largest): `10px, 11px, 12px, 12.5px, 13px, 14px, 15px, 16px, 17px, 20px, 21px, 22px, 26px`. Note the same class of element (small labels, card text, buttons) is sized in **px on some pages/components and rem on others** — e.g. buttons are `0.95rem` via the `--btn-font-size` token but `15px` as a raw literal on most page-level CTA buttons (`Contact.jsx`, `CustomersHub.jsx`, `Features.jsx`, `Integrations.jsx`, `News.jsx`, `Partners.jsx`, `Resources.jsx`, `Security.jsx`, `SolutionsHub.jsx`, `SolutionDetail.jsx`).

### 3.4 Font weights in use

`400` (subtitle text, `SignTimeLogo.jsx`), `500` (SectionHeader heading token; Pricing.jsx inactive-tab/footnote text), `600` (very common — labels, badges, buttons, nav links), `700` (headings default, card titles, quote attribution), `800` (large page/hero headings — the most common heading weight at page level, distinct from the `700` default set on bare `h1`–`h6` in `index.css`).

### 3.5 Line-heights in use

`1.05, 1.1, 1.15, 1.2, 1.25 (base h1–h6 rule), 1.3, 1.35, 1.4, 1.5, 1.6 (body default), 1.7`. `1.6` is by far the most common value, used for both the global `body` rule and most paragraph text set inline.

## 4. Spacing

### 4.1 Tokenized spacing — `src/styles/tokens.css`

| Token | Value |
|---|---|
| `--section-y` | `clamp(3rem, 6vw, 5rem)` |
| `--section-x` | `1.5rem` |
| `--section-max-width` | `1240px` |
| `--card-padding` | `1.75rem` |
| `--btn-padding-y` | `0.95rem` |
| `--btn-padding-x` | `1.75rem` |
| `--sh-gap-eyebrow` | `1rem` |
| `--sh-gap-subhead` | `1rem` |
| `--sh-max-width` | `640px` |
| `--pagehero-top-pad` | `4rem` |
| `--pagehero-compact-top-pad` | `4.5rem` |
| `--pagehero-compact-bottom-pad` | `3.5rem` |

`.container` (`index.css`) uses `max-width: 1240px; padding: 0 1.5rem` — the same max-width as `--section-max-width` but not aliased to it (two separate declarations of `1240px`).

### 4.2 Spacing values used in page/component inline styles

No shared spacing scale is used at the page level — values are hand-picked per instance rather than drawn from a token set. Distinct rem values observed for padding/margin/gap across `src/pages/` and `src/components/`: `0.2rem, 0.25rem, 0.3rem, 0.4rem, 0.5rem, 0.6rem, 0.7rem, 0.75rem, 0.8rem, 0.85rem, 0.9rem, 1rem, 1.1rem, 1.2rem, 1.5rem, 1.8rem, 2rem, 2.5rem, 2.8rem, 3rem, 3.5rem, 4rem, 4.5rem, 5rem`. Distinct px values observed: `2px, 3px, 4px, 6px, 8px, 10px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 32px, 36px, 40px, 44px, 64px`. Both units are used interchangeably for conceptually equivalent gaps (e.g. card padding appears as `20px`, `22px`, `24px`, `26px`, `28px`, and `1.75rem` across different components with no discernible pattern for which unit or value a given component uses).

### 4.3 Border-radius

| Value | Token alias | Where |
|---|---|---|
| `6px` | `--radius-sm` | small buttons, inputs |
| `12px` | `--radius-md` | cards (`--card-radius`), icon boxes |
| `20px` | `--radius-lg` | product card, modal |
| `9999px` | `--radius-full` | pills, badges |
| `4px` | — literal | skeleton bars, stepper buttons (`Hero.jsx`, `Pricing.jsx`) |
| `5px` | — literal | stepper buttons (`Pricing.jsx`) |
| `8px` | — literal | SSO/login buttons and inputs (`Login.jsx`), field headers |
| `10px` | — literal | badges, table cells (`Pricing.jsx`), Login banner |
| `14px` | — literal | very common literal card radius — used in `CaseStudyTemplate.jsx`, `CustomersHub.jsx`, `News.jsx`, `Integrations.jsx`, `Partners.jsx`, `Resources.jsx`, `Security.jsx`, `SolutionCategoryHub.jsx`, `SolutionDetail.jsx`, `SolutionsHub.jsx` — functionally identical to `--radius-md` (`12px`) but 2px larger and never aliased to it |
| `16px` | — literal | product/hero cards, Pricing tier cards, modal content, Login card |
| `50%` | — literal | circular avatars, icon badges, buttons |

`14px` as an un-tokenized "almost `--radius-md`" is the most notable radius inconsistency — it's the de facto standard card radius on subpages, while the actual `--radius-md` token (`12px`) is used elsewhere for the same conceptual role.

## 5. Component inventory

### 5.1 `src/components/ui/` — tokenized kit

| Component | Purpose |
|---|---|
| `Button.jsx` | Polymorphic button/link (renders `<Link>`, `<a>`, or `<button>` depending on `to`/`href` props). Variants: `primary`, `secondary`. Driven entirely by `--btn-*` tokens. |
| `Card.jsx` | Generic bordered container with optional hover-lift (`hover` prop) and padding (`padded` prop). Driven by `--card-*` tokens. |
| `Section.jsx` | Full-width page section wrapper with a centered inner container (`--section-max-width`). Three background variants: `light`, `panel`, `deep`, each setting `--sec-fg`/`--sec-fg-muted`/`--sec-border` CSS variables consumed by children. |
| `SectionHeader.jsx` | Eyebrow + heading (+ optional italic accent span) + subhead block, with `center`/`left` alignment. Heading uses `--font-display` (Newsreader). |
| `PageHero.jsx` | Hero backdrop section. `size="full"` renders the layered radial-gradient/vignette/grain navy backdrop (aliased 1:1 to the original hero tokens). `size="compact"` renders the `#DCEAFC` light-blue radial gradient — defined but **not used by any page** (see §8). |
| `index.js` | Barrel export for the above. |

### 5.2 `src/components/` — page-level components

| Component | Purpose |
|---|---|
| `Hero.jsx` | Homepage hero: animated masked headline, dual CTAs, trust pill, client-logo marquee, and an interactive mocked-up app-workspace (tabs for Document Setup / Add Fields / Preview & Send) with scroll-tied parallax. |
| `Navbar.jsx` | Site header — logo, three mega-menu dropdowns (Product/Solutions/Resources), Pricing/Contact/Login links, primary CTA, mobile drawer menu, scroll-based background toggling. |
| `Footer.jsx` | Site footer — brand block, four link columns, bottom legal/copyright bar. |
| `DemoModal.jsx` | Lead-capture modal ("Start Your SignTime Free Account") with a form and a post-submit success state. Opened via `DemoModalContext` from CTAs throughout the site. |
| `CaseStudyTemplate.jsx` | Shared layout for all 13 customer case-study pages — hero, metrics strip, optional pull quote, body sections, optional related-note callout, closing CTA. Purely data-driven via props. |
| `TrustSecurity.jsx` | Homepage "Security & Compliance" section — header, CTA, and a `ComplianceGrid` badge marquee. |
| `EnterpriseFeatures.jsx` | Homepage "Built for the Modern U.S. Enterprise" section — header plus a 6-card feature grid. |
| `InteractiveCarousel.jsx` | Homepage "Product Tour" section — header plus 6 feature configs passed into `FlipCardCarousel`. |
| `FlipCardCarousel.jsx` | Horizontally-scrollable card carousel where each card flips from a collapsed to an expanded face on click/keyboard, with scroll-nav buttons. |
| `ComplianceGrid.jsx` | Renders a row of circular badge icons, optionally as an infinite auto-scrolling marquee (used by `TrustSecurity` and `Security.jsx`). |
| `CostComparisonSlider.jsx` | Interactive pricing-comparison widget — a range slider (team size) that recalculates and displays SignTime's flat cost vs. a competitor's per-seat cost. Used on `Pricing.jsx`. |
| `CursiveSignature.jsx` | Decorative animated cursive "SignTime" wordmark with a gliding pen-tip and drawn underline. |
| `SignTimeLogo.jsx` | Brand logo — exports `SignTimeIcon` (inline SVG pen mark) and a default `SignTimeLogo` (icon + two-line wordmark), with color props. |
| `TodoFlag.jsx` | Inline yellow marker for unconfirmed facts (pricing, certifications, logos) that need sign-off before launch. |
| `Reveal.jsx` | Scroll-triggered fade/slide-in wrapper using `useScrollReveal` hook and the `.scroll-reveal`/`.is-revealed` CSS classes. |
| `ScrollReveal.jsx` | A second, separately-implemented scroll-triggered fade/slide-in wrapper (own `IntersectionObserver` logic, not the shared hook) using `.st-scroll-reveal`/`.is-visible` CSS classes. Functionally overlaps with `Reveal.jsx` — see §8. |

### 5.3 `src/hooks/` and `src/context/`

| File | Purpose |
|---|---|
| `hooks/useScrollReveal.js` | `IntersectionObserver`-based hook (threshold `0.15`, root margin `-60px` bottom) that adds `.is-revealed` on first intersect; respects `prefers-reduced-motion`. Backs `Reveal.jsx`. |
| `context/DemoModalContext.jsx` | React context providing `{ isOpen, open, close }` for `DemoModal`, consumed via `useDemoModal()` throughout the app. |

## 6. Pages / routes

Routing is defined in `src/App.jsx` using `react-router-dom`'s `<Routes>`/`<Route>` inside `HashRouter`.

| Route | Component | Purpose |
|---|---|---|
| `/` | `Home.jsx` | Composition of `Hero`, `TrustSecurity`, `EnterpriseFeatures`, `InteractiveCarousel`. |
| `/login` | `Login.jsx` | Non-functional demo sign-in screen (SSO buttons + email/password); all actions route to the demo modal or a simulated success state. |
| `/features` | `Features.jsx` | Full feature list across 4 categories (Send & Sign, Automate Workflows, Stay Compliant, Connect Your Tools). |
| `/features/:slug` | `FeatureDetail.jsx` | Per-feature detail page, content sourced from `data/features.js` (21 slugs) with a generated fallback for unknown slugs. |
| `/pricing` | `Pricing.jsx` | Pricing page — billing toggle, 3 tiers with a live sends-stepper, full feature-comparison table, `CostComparisonSlider`. |
| `/security` | `Security.jsx` | Security/compliance page — `ComplianceGrid`, protection details, current vs. in-progress certifications (`TodoFlag`-marked). |
| `/customers` | `CustomersHub.jsx` | Case-study index — 7 industry sections with case-study cards. |
| `/customers/temple-university-japan`, `/code-chrysalis`, `/qtnet`, `/kc-dat`, `/rotoworks`, `/krav-maga`, `/hccr`, `/curvegrid`, `/himeno-gumi`, `/global-brains`, `/greenvolt`, `/csi-thailand`, `/lease-japan-hr` | `src/pages/case-studies/*.jsx` (13 files) | Each is a thin data-only wrapper around `CaseStudyTemplate`. |
| `/customers/:slug` (fallback) | `PageStub.jsx` | Placeholder for any customer slug not explicitly routed above. |
| `/integrations` | `Integrations.jsx` | Integrations/API page — Salesforce/Web API/Webhooks cards, proof points. |
| `/integrations/:slug` | `FeatureDetail.jsx` | Reuses the feature-detail template for integration slugs. |
| `/partners` | `Partners.jsx` | White-label/OEM partner program page. |
| `/resources` | `Resources.jsx` | Resources hub — 4 content pillars with article cards. |
| `/resources/:slug` | `ResourceArticleStub.jsx` | Placeholder article page. |
| `/news` | `News.jsx` | Press/news listing with client-side category filtering. |
| `/contact` | `Contact.jsx` | 3-step "Book a Demo" wizard form. |
| `/solutions` | `SolutionsHub.jsx` | Landing page for 3 navigation dimensions: Use Case, Industry, Team. |
| `/solutions/use-case`, `/solutions/industry`, `/solutions/team` | `SolutionCategoryHub.jsx` | Card grid for each dimension, items from `data/solutions.js` (4 entries each). |
| `/solutions/use-case/:slug`, `/solutions/industry/:slug`, `/solutions/team/:slug` | `SolutionDetail.jsx` | Placeholder/scaffolded detail page (dashed-border "content pending" card, `TodoFlag`). |
| `/privacy` | `PageStub.jsx` (title="Privacy Policy") | Placeholder. |
| `/terms` | `PageStub.jsx` (title="Terms of Service") | Placeholder. |
| `/legal` | `PageStub.jsx` (title="Legal & Regulatory Notices") | Placeholder. |
| `/status` | `PageStub.jsx` (title="System Operational Status") | Placeholder. |
| `*` (catch-all) | `PageStub.jsx` (title="Page Not Found") | 404 fallback. |

`Navbar` and `Footer` wrap every route (rendered once in `App.jsx`, outside `<Routes>`). `DemoModal` is also mounted globally.

## 7. Animation & transition patterns

### 7.1 Keyframes defined in `src/index.css`

| Keyframe | Used by |
|---|---|
| `marqueeScroll` | `.marquee-track` (client-logo marquee) |
| `fadeIn` | `.modal-overlay`, Navbar dropdown panels |
| `heroFadeUp` | `.hero-pill`, `.hero-subhead`, `.hero-cta-primary`, `.hero-cta-secondary` |
| `heroLineReveal` | `.hero-line-inner` (masked headline lines) |
| `heroSignatureDraw` | `.hero-signature-path` (SVG watermark) |
| `heroSignatureBackdropIn` | `.hero-signature-backdrop` |
| `subpageFadeUp` | `.st-subpage-badge`, `.st-subpage-title`, `.st-subpage-subhead` |
| `subpageScaleIn` | `.st-subpage-card-1` through `-4` |
| `cuteFloat` | defined, not currently applied to any class in `index.css` |
| `cutePulseGlow` | `.cute-badge-pulse` |
| `sheenSweep` | `.btn::after` (button hover sheen) |
| `pageEnter` | `.st-page-enter` (route-change wrapper in `App.jsx`) |

### 7.2 Named animation/transition utility classes

| Class | Timing |
|---|---|
| `.hero-pill`, `.hero-subhead`, `.hero-cta-primary`, `.hero-cta-secondary` | `550ms cubic-bezier(0.16, 1, 0.3, 1)`, staggered delays 0ms/900ms/980ms/1060ms |
| `.hero-line-inner.line-1` / `.line-2` | `620ms cubic-bezier(0.16, 1, 0.3, 1)`, delays 100ms/200ms |
| `.hero-signature-path` | `1400ms cubic-bezier(0.65, 0, 0.35, 1)`, delay 750ms |
| `.hero-btn-primary`, `.hero-btn-secondary` | `160–220ms`, mostly `cubic-bezier(0.16, 1, 0.3, 1)` |
| `.scroll-reveal` (from `Reveal.jsx`) | `700ms cubic-bezier(0.16, 1, 0.3, 1)` |
| `.st-scroll-reveal` (from `ScrollReveal.jsx`) | `650ms cubic-bezier(0.16, 1, 0.3, 1)` — 50ms different from `.scroll-reveal` despite serving the same purpose |
| `.st-subpage-badge/-title/-subhead` | `480–520ms cubic-bezier(0.16, 1, 0.3, 1)`, staggered 40–200ms |
| `.st-subpage-card-1..4` | `450ms cubic-bezier(0.16, 1, 0.3, 1)`, staggered 260–500ms |
| `.cute-card-hover` | `220ms cubic-bezier(0.16, 1, 0.3, 1)` (transform/shadow), `220ms ease` (border-color) |
| `.cute-icon-spin` | `300ms cubic-bezier(0.34, 1.56, 0.64, 1)` (spring/overshoot curve) |
| `.cute-badge-pulse` | `3s ease-in-out infinite` |
| `.btn` (global) | `220ms cubic-bezier(0.16, 1, 0.3, 1)` (transform/shadow), `200ms ease` (background/border); `::after` sheen sweep `850ms cubic-bezier(0.4, 0, 0.2, 1)` on hover |
| `.st-page-enter` | `400ms cubic-bezier(0.16, 1, 0.3, 1)` — route-change fade/slide |
| `.marquee-track` | `48s linear infinite` (pauses on hover) |

Component-level inline `transition` values largely reuse `cubic-bezier(0.16, 1, 0.3, 1)` (an ease-out curve) or `cubic-bezier(0.4, 0, 0.2, 1)` (the `--transition-fast`/`--transition-normal` token curve), with durations ranging 160ms–300ms for hover/click feedback and 400–700ms for entrance animations. One exception: `Navbar.jsx`'s dropdown-chevron rotation is set as `transition: '0.2s'` (lines 102, 184, 252) with no property named, unlike every other transition in the codebase, which names specific properties.

### 7.3 `prefers-reduced-motion` handling

`index.css` has an explicit `@media (prefers-reduced-motion: reduce)` block (lines 449–496) that disables the hero entrance animations and `.scroll-reveal`. It does **not** cover `.st-scroll-reveal`, `.st-subpage-*`, `.cute-*`, `.btn` sheen/hover, or the marquee — those animations continue to run regardless of the user's reduced-motion preference. `useScrollReveal.js` (backing `Reveal.jsx`/`.scroll-reveal`) separately checks `prefers-reduced-motion` in JS and skips the observer; `ScrollReveal.jsx` (backing `.st-scroll-reveal`) has no such check.

### 7.4 Two separate scroll-reveal implementations

`Reveal.jsx` and `ScrollReveal.jsx` both implement "fade + translateY in on scroll intersection" but independently: different components, different CSS classes (`.scroll-reveal`/`.is-revealed` vs. `.st-scroll-reveal`/`.is-visible`), different `IntersectionObserver` thresholds (`0.15`/`-60px` vs. `0.12`/`-40px`), different durations (700ms vs. 650ms), and only one of the two respects `prefers-reduced-motion`. `Home.jsx` uses `ScrollReveal`; other pages use the `st-subpage-*`/`cute-card-hover` classes directly without either wrapper component.

## 8. Flags for design review

Purely factual observations a designer/reviewer would likely want to know about:

- **`PageHero size="compact"` is unused.** `tokens.css` explicitly tokenizes the `#DCEAFC` gradient (`--pagehero-compact-bg-start`, etc.) and its own comment states this is "the #DCEAFC gradient duplicated across ~10 pages today, but is NOT wired into any page in this task." Every page still hardcodes the raw gradient string inline instead.
- **Two independent scroll-reveal-on-view implementations** (`Reveal.jsx` vs. `ScrollReveal.jsx`, §7.4) with different timing values and inconsistent `prefers-reduced-motion` support.
- **White is spelled three ways**: `#fff`, `#ffffff`, `#FFFFFF` — all the same color, no consistent casing.
- **The hero background gradient string is duplicated verbatim in ~13 files** rather than centralized (see `#DCEAFC` row in §2.3).
- **The closing-CTA section pattern** (navy background, centered ~600–700px container, `clamp()` heading, `#9BAAC7` paragraph, coral + outline button pair) is repeated near-identically across `CustomersHub.jsx`, `Features.jsx`, `Integrations.jsx`, `Partners.jsx`, `Resources.jsx`, `Security.jsx`, `SolutionsHub.jsx`, `SolutionDetail.jsx`, `CaseStudyTemplate.jsx`, each with its own inline copy of the styles rather than a shared component.
- **`Pricing.jsx` (768 lines)** has the heaviest internal duplication in the codebase:
  - The `<td>` cell style object (`padding: '10px 16px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--ink)'`) is repeated verbatim roughly 25+ times.
  - The "+/− signature sends" stepper control is implemented twice with separate style blocks and separate state handling — once in the tier-card summary, once per-row in the feature table — for a visually identical control.
  - The annual/monthly billing toggle buttons are two near-duplicate inline style objects differing only in their active-state condition.
- **`ResourceArticleStub.jsx` imports `{ Link, useParams }` from `'react'`** (line 1) instead of `'react-router-dom'`, unlike every other page component in the codebase.
- **6 of the 9 decorative script fonts loaded in `index.html`** (`Alex Brush`, `Herr Von Muellerhoff`, `Monsieur La Doulaise`, `Pinyon Script`, `WindSong`, `Mrs Saint Delafield`) are never referenced anywhere in `src/`. Only `Caveat`, `Dancing Script`, and `Great Vibes` are used, and only in one place (`CursiveSignature.jsx`).
- **`public/signtime-logo.png` and `public/signtime-logo.svg` exist but are never referenced** in `src/`. The actual logo rendered on the site is an inline SVG defined in `SignTimeLogo.jsx`.
- **`14px` functions as a de facto card border-radius standard** across ~10 files, distinct from and never aliased to the actual `--radius-md` token (`12px`) used for the same conceptual role elsewhere (see §4.3).
- **Card padding is inconsistent between near-identical card patterns**: `SolutionCategoryHub.jsx` cards use `22px` padding, `SolutionsHub.jsx` cards use `28px`, both are the same visual card type (bordered link tile).
- **Adherence to the design-token system varies sharply by file.** `Security.jsx` contains zero hardcoded hex literals — every color is a `var(--token)`. `Pricing.jsx` and `Login.jsx`, by contrast, contain the largest concentrations of raw hex values and one-off colors not present anywhere else in the palette (`#3B97D3`, `#22B8E6`, `#FFA3A3`, `#34D399`, `#F4F7FC`, `#B8D5F2`).
- **`ComplianceGrid.jsx` uses `12.5px`** as a font-size — the only half-pixel value found anywhere in the codebase.
- **Two explicit in-code content flags exist**, both using the `TodoFlag` component or equivalent editorial comment: `Security.jsx` marks all 6 "in-progress" certifications as unconfirmed with a note to "confirm target dates with Jim before implying any are complete"; `SolutionCategoryHub.jsx`/`SolutionDetail.jsx` mark all Solutions content as scaffolded/placeholder.
- **`News.jsx`'s static news items include forward-dated entries** (e.g. dates later than the page's evident "current" context), consistent with placeholder content.
- **Login.jsx's "login" flow is entirely non-functional** — both SSO buttons, the "Forgot password?" link, and the post-"success" follow-up actions all route to the marketing `DemoModal` or a `setTimeout`-simulated success state rather than any real authentication.

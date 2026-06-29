# JSJ Roofing — Design System (DESIGN.md)

> **Version:** 1.0  
> **Last updated:** 2026-04-19  
> **Maintainer:** Ben — JSJ Roofing  
> **Status:** Active — Pending rebrand integration

---

## 1. Visual Theme

### Brand Essence

JSJ Roofing sits at the intersection of **trusted tradie craftsmanship** and **B2B professional service**. The visual system must communicate both: the hands-on reliability of a 30-year roofing specialist *and* the polish expected by strata managers who deal with 100+ emails a day and need contractors who reduce their workload, not add to it.

### Design Principles

| Principle | What It Means | What It Doesn't Mean |
|---|---|---|
| **Clarity first** | Every element serves a purpose. White space is not wasted space. | Minimalism for its own sake. We still need warmth. |
| **Evidence over claims** | Lead with photography, data, documentation. Show the work. | Stock photos, generic "team" imagery, vague promises. |
| **Grounded authority** | Confident, competent, calm. HIA award-winning, 30+ years. | Arrogant, aggressive, or salesy. |
| **Accessible professionalism** | Clean enough for a strata board meeting, human enough for a site visit. | Corporate jargon, stiff formality, or over-designed flourish. |

### Visual Metaphor

Think: **a well-organised toolbox**. Everything has its place, nothing is flashy for the sake of it, but when you open it, you immediately trust the person who owns it. The design system favours structure, honesty, and functional beauty — like a perfectly laid lead flashing.

### Photography Direction

Photography is JSJ's **killer differentiator** and should be treated as hero content throughout all materials. The documentary before/after style is rare in the trades and signals transparency and pride in workmanship.

- **Hero treatment:** Before/after comparisons should be the first thing visitors see, not buried in a gallery.
- **Style:** Honest, well-lit, high-resolution. Capture the problem *and* the solution. No filters, no staging.
- **Framing:** Shoot from the same angle for before/after pairs. Include context (surrounding roofscape, building facade) to ground the image.
- **Annotations:** Use overlays or callout markers to explain *what* the viewer is looking at — most strata managers can't tell a valley clip from a stinkpipe.
- **Documentation shots:** Include report-style images (moisture readings, measurements, close-ups of damage) — these reinforce the "detailed solutions" positioning.

---

## 2. Colour Palette & Roles

### Brand Colours

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--color-green` | `#a2c354` | 162, 195, 84 | **Primary accent.** The signature colour. Use for CTAs, highlights, key data points, and anything that says "action" or "positive." This is the differentiator — a green roofing company stands out. |
| `--color-blue` | `#0654a6` | 6, 84, 166 | **Primary brand.** Headers, navigation, primary text on light backgrounds. The trustworthy backbone. |
| `--color-cyan` | `#0088cf` | 0, 136, 207 | **Secondary accent.** Links, interactive elements, info states. Lighter counterpart to blue. |
| `--color-dark-blue` | `#082b51` | 8, 43, 81 | **Deep anchor.** Footer backgrounds, hero overlays, high-contrast text areas. |
| `--color-black` | `#231f20` | 35, 31, 32 | **Body text.** Rich, warm black (not pure #000). |
| `--color-white` | `#ffffff` | 255, 255, 255 | **Backgrounds, reversed text.** |

### Extended Semantic Palette

| Token | Hex | Role | Usage |
|---|---|---|---|
| `--color-surface-primary` | `#ffffff` | Page background | Default canvas |
| `--color-surface-secondary` | `#f7f8f5` | Subtle background | Cards, alternating table rows, sidebar |
| `--color-surface-tertiary` | `#eef0e8` | Emphasized background | Active states, hover backgrounds, tag fills |
| `--color-surface-dark` | `#082b51` | Dark canvas | Hero sections, footer, inverted cards |
| `--color-text-primary` | `#231f20` | Body copy | Default text colour |
| `--color-text-secondary` | `#5a5a5a` | Supporting text | Captions, metadata, help text |
| `--color-text-tertiary` | `#8a8a8a` | Muted text | Placeholders, disabled labels |
| `--color-text-inverse` | `#ffffff` | Text on dark backgrounds | Hero headings, footer links |
| `--color-success` | `#a2c354` | Positive / complete | Uses brand green — reinforces brand in success states |
| `--color-success-bg` | `#f4f8ea` | Success background | Toast backgrounds, success banners |
| `--color-warning` | `#e8a317` | Caution | Approaching deadlines, attention needed |
| `--color-warning-bg` | `#fef7e6` | Warning background | Warning banners |
| `--color-error` | `#d63031` | Error / critical | Validation errors, urgent alerts |
| `--color-error-bg` | `#fdeaea` | Error background | Error banners |
| `--color-info` | `#0088cf` | Informational | Uses brand cyan — tips, info callouts |
| `--color-info-bg` | `#e6f4fb` | Info background | Info banners |
| `--color-border-light` | `#e2e4dc` | Subtle dividers | Card borders, input borders at rest |
| `--color-border-medium` | `#c5c8bc` | Visible dividers | Table borders, section dividers |
| `--color-border-focus` | `#0654a6` | Focus ring | Accessibility focus indicators |

### Colour Usage Rules

1. **Green leads the action.** Every primary CTA, every key metric, every "look here" moment should use `--color-green`. This is currently underused — the green is JSJ's most distinctive asset and should be impossible to miss.
2. **Blue provides structure.** Navigation, headings, and structural elements use `--color-blue` or `--color-dark-blue`.
3. **Cyan is the interactive colour.** Links, hover states, and secondary actions.
4. **60-30-10 rule:** 60% white/surface, 30% blue family, 10% green accents. The green should feel like a highlight pen — selective but impactful.
5. **Contrast ratios:** All text must meet WCAG 2.1 AA (4.5:1 for body, 3:1 for large text). `--color-green` on white fails AA for small text — always use it on dark backgrounds for text, or use it for large elements (buttons, icons, borders) on light backgrounds.

### Colour Accessibility Notes

| Combination | Contrast Ratio | Verdict |
|---|---|---|
| `--color-black` on `--color-white` | 15.4:1 | ✅ AAA |
| `--color-blue` on `--color-white` | 6.2:1 | ✅ AA |
| `--color-dark-blue` on `--color-white` | 12.1:1 | ✅ AAA |
| `--color-green` on `--color-white` | 2.8:1 | ❌ Fails — use for large elements only |
| `--color-green` on `--color-dark-blue` | 5.5:1 | ✅ AA |
| `--color-white` on `--color-blue` | 6.2:1 | ✅ AA |
| `--color-white` on `--color-dark-blue` | 12.1:1 | ✅ AAA |

---

## 3. Typography Rules

### Font Stack

| Role | Font Family | Fallback | Source |
|---|---|---|---|
| **Headings** | **Inter** | `system-ui, -apple-system, sans-serif` | [Google Fonts](https://fonts.google.com/specimen/Inter) |
| **Body** | **Inter** | `system-ui, -apple-system, sans-serif` | [Google Fonts](https://fonts.google.com/specimen/Inter) |
| **Monospace** | **JetBrains Mono** | `ui-monospace, monospace` | [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) |

**Why Inter?** It's engineered for screens, highly legible at small sizes (critical for data-dense reports and proposals), has excellent weight range, and reads as modern-professional without being cold. It works across web, documents, and presentations.

### Type Scale

Base size: `16px` (1rem). Scale ratio: `1.25` (Major Third).

| Token | Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| `--text-display` | 48 | 3.000 | 700 | 1.1 | -0.02em | Hero headlines |
| `--text-h1` | 38 | 2.375 | 700 | 1.2 | -0.015em | Page titles |
| `--text-h2` | 30 | 1.875 | 600 | 1.25 | -0.01em | Section headings |
| `--text-h3` | 24 | 1.500 | 600 | 1.3 | -0.005em | Subsection headings |
| `--text-h4` | 20 | 1.250 | 600 | 1.35 | 0 | Card titles, sidebar heads |
| `--text-body-lg` | 18 | 1.125 | 400 | 1.6 | 0 | Lead paragraphs, intros |
| `--text-body` | 16 | 1.000 | 400 | 1.6 | 0 | Default body text |
| `--text-body-sm` | 14 | 0.875 | 400 | 1.5 | 0.005em | Captions, metadata |
| `--text-caption` | 12 | 0.750 | 500 | 1.4 | 0.01em | Labels, badges, footnotes |
| `--text-overline` | 11 | 0.688 | 700 | 1.3 | 0.1em | Overline labels (uppercase) |

### Typography Rules

1. **Heading hierarchy is sacred.** Never skip a heading level. H1 → H2 → H3, always.
2. **Body line length:** 60–75 characters per line for readability. At `--text-body` (16px), this means a max-width of roughly `680px` for text blocks.
3. **Paragraph spacing:** Use `1em` (16px) between paragraphs. No extra line breaks.
4. **Bold for emphasis, not entire sentences.** Use `font-weight: 600` sparingly to highlight key terms.
5. **No italics in headings.** Ever.
6. **Numbers in data contexts** should use tabular figures (`font-variant-numeric: tabular-nums`) for alignment in tables and reports.
7. **All caps only for `--text-overline`.** Nowhere else.

### Voice in Type

JSJ's written voice is: clear, honest, human. The typography should support this by being highly legible, well-spaced, and never cramped. Generous line height (1.6 for body) gives breathing room. Short paragraphs (2-4 sentences max) match the brand's direct communication style.

---

## 4. Component Stylings

### 4.1 Buttons

#### Primary Button (Green CTA)
```
background: var(--color-green);           /* #a2c354 */
color: var(--color-dark-blue);            /* #082b51 — dark text for contrast */
font-size: var(--text-body);              /* 16px */
font-weight: 600;
padding: 12px 28px;
border-radius: 6px;
border: none;
text-transform: none;                     /* Sentence case, not uppercase */
transition: all 0.2s ease;
cursor: pointer;

/* Hover */
background: #91b343;                      /* 10% darker green */
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(162, 195, 84, 0.3);

/* Active */
background: #82a33a;
transform: translateY(0);

/* Focus */
outline: 2px solid var(--color-border-focus);
outline-offset: 2px;
```

#### Secondary Button (Blue Outline)
```
background: transparent;
color: var(--color-blue);
border: 2px solid var(--color-blue);
font-size: var(--text-body);
font-weight: 600;
padding: 10px 26px;
border-radius: 6px;

/* Hover */
background: var(--color-blue);
color: var(--color-white);
```

#### Tertiary Button (Text Link Style)
```
background: none;
color: var(--color-cyan);
font-weight: 600;
padding: 8px 4px;
border: none;
border-bottom: 2px solid transparent;

/* Hover */
border-bottom-color: var(--color-cyan);
```

#### Button Sizes
| Size | Padding | Font Size | Min Height |
|---|---|---|---|
| Small | `8px 16px` | 14px | 36px |
| Default | `12px 28px` | 16px | 44px |
| Large | `16px 36px` | 18px | 52px |

### 4.2 Cards

#### Standard Card
```
background: var(--color-white);
border: 1px solid var(--color-border-light);
border-radius: 8px;
padding: 24px;
transition: box-shadow 0.2s ease, border-color 0.2s ease;

/* Hover (if interactive) */
border-color: var(--color-border-medium);
box-shadow: 0 4px 16px rgba(35, 31, 32, 0.08);
```

#### Service Card
```
/* Extends Standard Card */
padding: 0;
overflow: hidden;

/* Image area */
.service-card__image {
  aspect-ratio: 16/10;
  object-fit: cover;
  width: 100%;
}

/* Content area */
.service-card__body {
  padding: 20px 24px;
}

/* Service name */
.service-card__title {
  font-size: var(--text-h4);             /* 20px */
  font-weight: 600;
  color: var(--color-blue);
  margin-bottom: 8px;
}

/* Description */
.service-card__desc {
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

/* Green accent bar at top */
.service-card::before {
  content: '';
  display: block;
  height: 4px;
  background: var(--color-green);
}
```

#### Testimonial Card
```
background: var(--color-surface-secondary);
border: none;
border-left: 4px solid var(--color-green);
border-radius: 0 8px 8px 0;
padding: 24px 28px;

/* Quote mark */
.testimonial__mark {
  font-size: 48px;
  color: var(--color-green);
  line-height: 1;
  font-family: Georgia, serif;
}

/* Attribution */
.testimonial__author {
  font-size: var(--text-body-sm);
  font-weight: 600;
  color: var(--color-blue);
}
.testimonial__role {
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
}
```

### 4.3 Before / After Gallery

This is JSJ's signature component and should be treated as a **hero-level element**, not a utility widget.

```
/* Container */
.before-after {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;                               /* Thin divider between images */
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

/* Labels */
.before-after__label {
  position: absolute;
  top: 12px;
  padding: 4px 12px;
  font-size: var(--text-caption);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
}
.before-after__label--before {
  left: 12px;
  background: var(--color-error);
  color: white;
}
.before-after__label--after {
  right: 12px;
  background: var(--color-green);
  color: var(--color-dark-blue);
}

/* Image */
.before-after__img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

/* Caption strip */
.before-after__caption {
  grid-column: 1 / -1;
  background: var(--color-dark-blue);
  color: var(--color-white);
  padding: 12px 16px;
  font-size: var(--text-body-sm);
}
```

**Interactive variant:** For web, implement a slider/drag handle version where users can swipe between before and after on the same image.

### 4.4 Forms

#### Text Input
```
background: var(--color-white);
border: 1.5px solid var(--color-border-light);
border-radius: 6px;
padding: 10px 14px;
font-size: var(--text-body);
color: var(--color-text-primary);
transition: border-color 0.15s ease;

/* Placeholder */
::placeholder {
  color: var(--color-text-tertiary);
}

/* Focus */
border-color: var(--color-blue);
box-shadow: 0 0 0 3px rgba(6, 84, 166, 0.12);
outline: none;

/* Error */
border-color: var(--color-error);
box-shadow: 0 0 0 3px rgba(214, 48, 49, 0.12);

/* Label */
font-size: var(--text-body-sm);
font-weight: 600;
color: var(--color-text-primary);
margin-bottom: 6px;

/* Help text */
font-size: var(--text-caption);
color: var(--color-text-secondary);
margin-top: 4px;
```

### 4.5 Tables

```
/* Table */
width: 100%;
border-collapse: collapse;
font-size: var(--text-body-sm);

/* Header */
th {
  background: var(--color-dark-blue);
  color: var(--color-white);
  font-weight: 600;
  padding: 12px 16px;
  text-align: left;
  font-size: var(--text-caption);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* Rows */
td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border-light);
  color: var(--color-text-primary);
}
tr:nth-child(even) {
  background: var(--color-surface-secondary);
}

/* Hover */
tr:hover {
  background: var(--color-surface-tertiary);
}
```

### 4.6 Navigation

#### Primary Nav (Desktop)
```
background: var(--color-white);
border-bottom: 1px solid var(--color-border-light);
height: 72px;
padding: 0 clamp(16px, 4vw, 64px);
display: flex;
align-items: center;
justify-content: space-between;

/* Logo area: max-height 40px */
/* Nav links */
.nav__link {
  font-size: var(--text-body-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 8px 16px;
  position: relative;
}
.nav__link:hover {
  color: var(--color-blue);
}
.nav__link--active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 16px;
  right: 16px;
  height: 3px;
  background: var(--color-green);
  border-radius: 2px;
}

/* CTA Button in nav */
.nav__cta {
  /* Uses Primary Button (green) at Small size */
}
```

### 4.7 Hero Section

```
.hero {
  background: var(--color-dark-blue);
  color: var(--color-white);
  padding: 80px clamp(16px, 6vw, 120px);
  position: relative;
  overflow: hidden;
  min-height: 480px;
  display: flex;
  align-items: center;
}

/* Background image with overlay */
.hero__bg {
  position: absolute;
  inset: 0;
  object-fit: cover;
  opacity: 0.25;
}

/* Content */
.hero__overline {
  font-size: var(--text-overline);
  color: var(--color-green);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}
.hero__title {
  font-size: var(--text-display);
  max-width: 680px;
  margin-bottom: 16px;
}
.hero__subtitle {
  font-size: var(--text-body-lg);
  opacity: 0.85;
  max-width: 560px;
  margin-bottom: 32px;
}
```

### 4.8 Proposal Header

Proposals are high-touch documents sent to strata managers. The header sets immediate credibility.

```
.proposal-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  padding: 32px 40px;
  background: var(--color-white);
  border-bottom: 4px solid var(--color-green);
}

/* Left: Property details */
.proposal-header__property {
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--color-dark-blue);
}
.proposal-header__address {
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  margin-top: 4px;
}
.proposal-header__meta {
  display: flex;
  gap: 24px;
  margin-top: 16px;
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
}

/* Right: Logo + reference */
.proposal-header__logo {
  max-width: 160px;
}
.proposal-header__ref {
  font-size: var(--text-caption);
  color: var(--color-text-tertiary);
  text-align: right;
  margin-top: 8px;
}
```

---

## 5. Layout Principles

### Grid System

| Property | Value |
|---|---|
| Type | CSS Grid / Flexbox hybrid |
| Columns | 12-column grid |
| Gutter | 24px (desktop), 16px (mobile) |
| Max content width | 1200px |
| Side padding | `clamp(16px, 4vw, 64px)` |

### Common Layouts

#### Full-width hero + contained content
```
.page {
  display: grid;
  grid-template-columns: 1fr min(1200px, 100% - 2 * clamp(16px, 4vw, 64px)) 1fr;
}
.page > .full-width {
  grid-column: 1 / -1;
}
.page > * {
  grid-column: 2;
}
```

#### Two-column content (e.g., services page)
```
.two-col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}
```

#### Three-column cards (e.g., service cards)
```
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
```

### Spacing Scale

Base unit: `4px`. All spacing should be multiples of 4.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight inner padding |
| `--space-2` | 8px | Icon gaps, tight margins |
| `--space-3` | 12px | Input padding, small card gaps |
| `--space-4` | 16px | Standard padding, paragraph gaps |
| `--space-5` | 20px | Card inner padding (compact) |
| `--space-6` | 24px | Card padding, grid gutters |
| `--space-8` | 32px | Section inner padding |
| `--space-10` | 40px | Proposal/document padding |
| `--space-12` | 48px | Between page sections |
| `--space-16` | 64px | Major section breaks |
| `--space-20` | 80px | Hero padding, page top/bottom |
| `--space-24` | 96px | Large section spacing (desktop) |

### Alignment Rules

1. **Left-align everything** unless centring is explicitly needed (hero text may centre on mobile, never centre body paragraphs).
2. **Tables:** Left-align text, right-align numbers.
3. **Forms:** Stack labels above inputs. Never float labels.
4. **Cards:** Equal height in grids (use `align-items: stretch`).

---

## 6. Depth & Elevation

### Elevation Scale

| Token | Box Shadow | Usage |
|---|---|---|
| `--elevation-0` | `none` | Flat elements, default state |
| `--elevation-1` | `0 1px 3px rgba(35,31,32,0.06)` | Resting cards, inputs |
| `--elevation-2` | `0 4px 12px rgba(35,31,32,0.08)` | Hovered cards, dropdowns |
| `--elevation-3` | `0 8px 24px rgba(35,31,32,0.12)` | Modals, popovers, floating actions |
| `--elevation-4` | `0 16px 48px rgba(35,31,32,0.16)` | Lightbox overlays, full-screen modals |

### Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Tags, badges, small elements |
| `--radius-md` | 6px | Buttons, inputs |
| `--radius-lg` | 8px | Cards, images |
| `--radius-xl` | 12px | Modals, large containers |
| `--radius-full` | 9999px | Avatars, pill shapes |

### Depth Rules

1. **Elevation implies interactivity.** If it floats, it should be clickable or dismissible.
2. **No more than 2 elevation levels on screen at once.** A card (`elevation-1`) can open a dropdown (`elevation-2`), but avoid stacking beyond that.
3. **Dark surfaces don't need shadows.** The `--color-dark-blue` hero section uses colour contrast, not shadow, to establish hierarchy.
4. **Border radius should be consistent within a component group.** All cards in a grid use the same radius.

---

## 7. Do's and Don'ts

### ✅ Do

| Area | Guideline |
|---|---|
| **Photography** | Lead with before/after images on every page. Put them above the fold. They're your best sales tool — a strata manager seeing a clean, documented repair builds instant trust. |
| **Green accent** | Use `#a2c354` boldly and consistently for all CTAs, success states, positive metrics, and key callouts. It's currently underused. A distinctive green roofing company is memorable — own it. |
| **Data & evidence** | Show numbers: "30+ years," "HIA award-winning," "2 locations." Use stats in headlines and hero sections. Strata managers are data-driven decision makers. |
| **Plain English** | Write in short, direct sentences. "We fix leaks. We document everything. You get a report, not an excuse." No jargon unless it's the technical term a strata manager would search for. |
| **Consistency** | Use the same logo, colour treatment, and voice across the website, proposals, email signatures, directory listings, Google Business, LinkedIn, and truck signage. |
| **LinkedIn investment** | Post weekly: before/after shots, project walkthroughs, tips for strata managers, team spotlights. This is a B2B business — LinkedIn is where strata managers and property professionals live. Aim for 3× weekly posts. |
| **Mobile-first** | Design for strata managers on their phones between site visits. Every CTA must be thumb-reachable, every form must be short. |
| **White space** | Let content breathe. A strata manager getting 100+ emails/day will bounce if the page feels dense. |
| **Proposals** | Brand proposals consistently: green accent bar, logo top-right, property address prominent, photo documentation integrated (not attached separately). |
| **Contact accessibility** | Phone number visible without scrolling on every page. Strata managers call when things are urgent. |

### ❌ Don't

| Area | Guideline |
|---|---|
| **Stock photography** | Never use generic roofing stock photos. JSJ's real photography is a genuine differentiator — fake images destroy trust instantly. |
| **Green on white text** | Never set `#a2c354` as text colour on white backgrounds. It fails accessibility. Use it for borders, backgrounds, icons, and large elements instead. |
| **Centred body text** | Never centre paragraphs of body text. Left-align always. |
| **All-caps headings** | Reserve uppercase for overlines only (`--text-overline`). All-caps headings feel aggressive, not professional. |
| **Cluttered layouts** | Don't pack every service onto the homepage. Strata managers need to find their problem quickly, not browse a catalogue. |
| **Salesy language** | Avoid superlatives ("best," "amazing," "incredible"). The work speaks for itself — let the photos and documentation do the selling. |
| **Inconsistent listings** | Don't let directory listings (Google, HiPages, Yellow Pages, TrueLocal) show different hours, phone numbers, or descriptions. Audit quarterly. |
| **Burying the CTA** | Don't hide "Get a Quote" below three scrolls of content. Green CTA button within the first viewport, always. |
| **Decorative elements** | No gradients, patterns, or textures for decoration. If it doesn't communicate information, remove it. |
| **Ignoring mobile** | Don't design desktop-first and hope mobile works. 60%+ of strata managers will see your content on mobile first. |

---

## 8. Responsive Behaviour

### Breakpoints

| Token | Width | Target |
|---|---|---|
| `--bp-sm` | 480px | Small phones |
| `--bp-md` | 768px | Tablets / large phones |
| `--bp-lg` | 1024px | Small laptops / tablets landscape |
| `--bp-xl` | 1280px | Desktop |
| `--bp-2xl` | 1440px | Large desktop |

### Responsive Rules

#### Typography Scaling

| Element | Mobile (< 768px) | Tablet (768–1024px) | Desktop (> 1024px) |
|---|---|---|---|
| `--text-display` | 32px | 40px | 48px |
| `--text-h1` | 28px | 34px | 38px |
| `--text-h2` | 24px | 28px | 30px |
| `--text-h3` | 20px | 22px | 24px |
| `--text-body` | 16px | 16px | 16px |

Use `clamp()` for fluid scaling:
```css
font-size: clamp(2rem, 1.5rem + 2vw, 3rem);   /* Display */
font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.375rem); /* H1 */
```

#### Layout Shifts

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Hamburger menu | Hamburger menu | Full horizontal nav |
| Card grid | 1 column | 2 columns | 3 columns |
| Before/After | Stacked (vertical) | Side-by-side | Side-by-side |
| Hero | Stacked, centred text | Stacked, left-aligned | Side-by-side with image |
| Proposal header | Stacked, logo above | Side-by-side | Side-by-side |
| Tables | Horizontal scroll or card view | Full table | Full table |
| Footer | Stacked columns | 2-column | 4-column |
| Side padding | 16px | 32px | `clamp(32px, 4vw, 64px)` |

#### Touch Targets

All interactive elements must be at least **44px × 44px** on touch devices (WCAG 2.5.5). This applies to buttons, links in navigation, form controls, and gallery navigation.

#### Image Handling

- Serve responsive images using `srcset` and `sizes` attributes.
- Before/after pairs: maintain identical aspect ratios across breakpoints.
- Hero background images: use `object-position: center 30%` to keep roof detail visible when cropped on mobile.
- Lazy-load all images below the fold.

---

## 9. Agent Prompt Guide

This section helps AI tools, code generators, and design assistants apply the JSJ Roofing design system correctly.

### System Prompt Snippet

```
You are generating content/designs for JSJ Roofing, a Sydney-based commercial 
roofing company specialising in strata maintenance. Follow these rules:

BRAND VOICE: Clear, honest, direct Australian English. Short sentences. No jargon, 
no fluff, no superlatives. Sound like someone you'd trust to fix your roof — 
competent and straightforward.

COLOURS: Primary accent is green (#a2c354) — use for CTAs, highlights, success 
states. Structure uses blue (#0654a6) and dark blue (#082b51). Body text is warm 
black (#231f20). Never use green as small text on white (fails accessibility).

TYPOGRAPHY: Inter font family. Body 16px, line-height 1.6. Headings use 
semibold (600) or bold (700). Max line width 680px for readability.

PHOTOGRAPHY: Always prefer real JSJ photography over stock. Before/after 
comparisons are the hero content. Documentary style, honest, well-lit.

AUDIENCE: Strata managers aged 30-50 who manage 30-50 schemes, receive 100+ 
emails daily, and value efficiency above all. They need contractors who reduce 
their workload. Speak to their pain: "You forward the email, we handle the rest."

DIFFERENTIATORS: HIA award-winning, 30+ years, comprehensive photo documentation, 
detailed transparent reporting, On-Time On-Budget On-Scope.

VALUES: Respect, Dedicated, Get things done, Pride in work, Loyalty.
```

### Token Reference (Quick Copy)

```css
/* Brand Colours */
--color-green: #a2c354;
--color-blue: #0654a6;
--color-cyan: #0088cf;
--color-dark-blue: #082b51;
--color-black: #231f20;
--color-white: #ffffff;

/* Surfaces */
--color-surface-primary: #ffffff;
--color-surface-secondary: #f7f8f5;
--color-surface-tertiary: #eef0e8;
--color-surface-dark: #082b51;

/* Text */
--color-text-primary: #231f20;
--color-text-secondary: #5a5a5a;
--color-text-tertiary: #8a8a8a;
--color-text-inverse: #ffffff;

/* Semantic */
--color-success: #a2c354;
--color-warning: #e8a317;
--color-error: #d63031;
--color-info: #0088cf;

/* Spacing (base 4px) */
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;
--space-4: 16px;  --space-5: 20px;  --space-6: 24px;
--space-8: 32px;  --space-10: 40px; --space-12: 48px;
--space-16: 64px; --space-20: 80px; --space-24: 96px;

/* Elevation */
--elevation-0: none;
--elevation-1: 0 1px 3px rgba(35,31,32,0.06);
--elevation-2: 0 4px 12px rgba(35,31,32,0.08);
--elevation-3: 0 8px 24px rgba(35,31,32,0.12);
--elevation-4: 0 16px 48px rgba(35,31,32,0.16);

/* Radius */
--radius-sm: 4px;  --radius-md: 6px;  --radius-lg: 8px;
--radius-xl: 12px; --radius-full: 9999px;
```

### Component Generation Prompts

When generating JSJ components, use these patterns:

**"Create a JSJ service card"** → Use green accent bar top, blue title, secondary text description, real photography placeholder at 16:10 ratio, subtle border, 8px radius.

**"Create a JSJ CTA button"** → Green background (#a2c354), dark blue text (#082b51), 600 weight, 12px 28px padding, 6px radius, hover lifts 1px with green shadow.

**"Create a JSJ hero section"** → Dark blue background (#082b51), white text, green overline text, before/after image or documentary photo as background at 25% opacity. Green CTA button.

**"Create a JSJ proposal"** → White background, green bottom border on header, logo top-right, property address as primary heading in dark blue, meta information (date, ref, strata plan) in secondary text, integrated photo documentation.

**"Create a JSJ data table"** → Dark blue header row, white text, alternating row backgrounds (#fff / #f7f8f5), left-align text, right-align numbers, 14px font size.

**"Write JSJ marketing copy"** → Short sentences, plain Australian English, lead with the benefit to the strata manager, include a specific stat or proof point, end with a clear call to action. No fluff.

---

## Appendix: Brand Improvement Recommendations

The following recommendations are direct and opinionated. They address areas where JSJ's current brand execution can be strengthened ahead of the planned rebrand.

### A. Colour Strategy — Own the Green

The green `#a2c354` is JSJ's most distinctive brand asset. It's unusual for a roofing company and immediately differentiates from competitors who all lean into generic blues and reds. Currently, the green is underused — it appears in the logo but doesn't dominate the visual experience.

**Recommendation:** Make green the *action colour* everywhere. Every CTA button, every positive metric, every "completed" status, every proposal accent bar. When someone sees that specific green, they should think JSJ. This is a colour-recognition play similar to how Bunnings owns warehouse red or Woolworths owns that particular green — JSJ should own lime-green in Sydney strata roofing.

### B. Photography as Hero Content

JSJ's before/after documentation photography is genuinely rare in the trades. Most roofing competitors show stock images or poorly-lit phone photos. JSJ's documentary approach is professional and builds enormous trust.

**Recommendation:** Move before/after galleries from sub-pages to the **homepage hero position**. Create an auto-playing slider that cycles through 4-5 dramatic transformations. Every service page should lead with a before/after, not a text description. Every proposal should embed photos inline, not as separate attachments. Consider investing in a drone for aerial before/after shots — these are spectacular for flat roofs and box gutters.

### C. LinkedIn — The Untapped Channel

JSJ is a B2B business where 95% of revenue flows through strata manager relationships. LinkedIn is where strata managers, property managers, building managers, and body corporate committee members spend their professional time. It's currently severely underutilised.

**Recommendation:** Commit to 3 posts per week on LinkedIn. Content pillars should include before/after project showcases (with permission), educational tips for strata managers ("5 signs your box gutters need replacing"), team spotlights, industry commentary, and responses to weather events ("After last night's storm, here's what to check on your strata property"). Ben's personal LinkedIn should also be active — B2B buyers trust founders. Target connections with strata managers from all three segments.

### D. Proposal Design Language

Proposals are the highest-stakes brand touchpoint. A strata manager forwards JSJ's proposal to a committee who has never heard of JSJ. The proposal *is* the brand at that moment.

**Recommendation:** Standardise every proposal with the design system: green accent bar, professional header with property details, integrated (not attached) photo documentation with annotations, clear pricing tables using the table component style, and a "Why JSJ" footer section that includes the HIA badge, years of experience, and the On-Time On-Budget On-Scope promise. Make the proposal feel like a document from a company that charges more — even if pricing is competitive.

### E. Directory Listing Consistency

Multiple directory listings (Google Business, HiPages, Yellow Pages, TrueLocal, etc.) likely show inconsistent descriptions, hours, contact details, and imagery.

**Recommendation:** Conduct a quarterly audit of all directory listings. Create a "listing source of truth" document with the approved business description, hours, phone numbers, service list, and hero images. Update all listings to match. Ensure both Riverstone and Alexandria locations are listed separately with correct details. Respond to every Google review — positive and negative.

### F. Typography Consistency

Without a defined type system, typography across the website, proposals, emails, and documents likely varies — different fonts, different sizes, different weights depending on who created the asset.

**Recommendation:** Adopt Inter as the single font family across all digital touchpoints. For print, use Inter for headings and a clean system font for body. Create branded document templates (proposal, report, email signature, letterhead) that enforce the type scale from this design system. This alone will significantly increase perceived professionalism.

### G. Email Design

With a 37% open rate on a database of ~1,200 strata managers, email is already performing well. But the design should match the brand system.

**Recommendation:** Create a branded email template that uses the dark blue header, green accent for CTAs, Inter font (with system fallback), and includes a before/after image in every newsletter. The "Choosing A Roofing Partner You Can Trust" lead magnet download should be the persistent footer CTA. Every email should have one clear action, not multiple competing links.

### H. Website Refresh Priorities

The current WordPress site is professional but could be more distinctive. Given the planned rebrand, major structural changes may wait, but quick wins exist.

**Recommendation (quick wins):**
1. Move a before/after gallery to above the fold on the homepage.
2. Add a "Trusted by strata managers across Sydney" social proof bar below the hero.
3. Make the green CTA buttons bolder and more prominent.
4. Add structured data (LocalBusiness schema) for both locations.
5. Create dedicated landing pages for each service with before/after photos and FAQ schema.
6. Add a "What strata managers say" testimonial section to the homepage.

---

*This design system is a living document. Update it as the brand evolves, particularly during the planned rebrand. All tokens and values should be implemented as CSS custom properties or design tokens in whichever platform is used.*

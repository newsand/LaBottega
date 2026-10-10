# MASTER Design System — Beholder

> Elegância Medieval. Observe, monitore, entenda. Cyan + Gold em harmonia clássica.

---

## Hero Image

**The Beholder** — Central eye observing all, surrounded by sentinel eyes. Cyan glow + gold fire core on deep navy. This is the visual anchor and brand essence.

- **Placement:** Hero section, 100% width above fold
- **Aspect ratio:** 16:9 (cinematic)
- **Overlay:** Subtle gradient fade (navy to transparent) for text legibility
- **Purpose:** Establishes the "watchers" metaphor — perfect for a monitor

---

## Color Palette

### Primary — Medieval Gold (Elegance, not flash)
- `gold-50`: `#FFFBF0` — Parchment (barely there)
- `gold-200`: `#F3E8D8` — Warm cream
- `gold-400`: `#D4A574` — Rich gold (accent)
- `gold-700`: `#9D7E66` — Deep gold (text/borders)
- `gold-900`: `#5C4A42` — Nearly black gold

### Secondary — Cyan (Observation, clarity)
- `cyan-50`: `#ECFDF5` — Barely visible
- `cyan-200`: `#CCFBF1` — Light cyan (highlights)
- `cyan-400`: `#22D3EE` — Pure cyan (accent glow, from Beholder eyes)
- `cyan-600`: `#0891B2` — Deep cyan
- `cyan-900`: `#164E63` — Midnight cyan

### Base — Deep Navy (Background, authority)
- `navy-50`: `#F8FAFC` — Ghost white
- `navy-100`: `#E2E8F0` — Cool gray
- `navy-700`: `#1E293B` — Rich navy
- `navy-900`: `#0F172A` — Deep midnight (hero bg)

### Semantic (Muted, elegant)
- `neutral-text`: `#1F2937` — Dark gray (body text)
- `neutral-secondary`: `#6B7280` — Medium gray (secondary)
- `neutral-border`: `#D1D5DB` — Soft border
- `neutral-bg`: `#F9FAFB` — Off-white bg

**No hard neon badges.** Semantic colors only when absolutely necessary:
- Status uses navy/gold/cyan combinations, not RGB neons
- Errors suggested via subtle desaturation + gold border
- Success via cyan glow, not bright green

---

## Typography

### Serif (Georgia — Classical Authority)
- **Font:** Georgia, 'Garamond', serif (serif stack, no sans fallback for titles)
- **Usage:** H1, H2, H3, key labels, brand moments
- **Weights:** 700 (bold headings), 600 (emphasis)
- **Size Scale:**
  - `h1`: 3.5rem (56px), line-height 1.2, gold glow on hover
  - `h2`: 2.25rem (36px), line-height 1.3, gold underline
  - `h3`: 1.5rem (24px), line-height 1.4
  - `h4`: 1.125rem (18px), line-height 1.5

### Sans-Serif (Body — Clarity)
- **Font:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Usage:** Body, descriptions, UI labels
- **Weights:** 400 (regular), 600 (emphasis), 500 (medium)
- **Size:** 1rem (16px) body, 0.9rem (14px) secondary, 0.85rem (13px) captions
- **Line-height:** 1.6 (body), 1.5 (secondary)
- **Letter-spacing:** +0.5px for elegance, no aggressive tracking

### Monospace (Code — Technical Precision)
- **Font:** 'Monaco', 'Courier New', monospace
- **Usage:** Code blocks, variable names, technical details
- **Size:** 0.875rem (14px), line-height 1.6
- **Color:** `neutral-text` on light bg, `neutral-secondary` on dark

---

## Spacing System

**Base Unit:** 8px (powers of 2, classical proportions)

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 4px | Micro (icon padding) |
| `space-2` | 8px | Tight groups |
| `space-3` | 12px | Component padding |
| `space-4` | 16px | Standard padding |
| `space-6` | 24px | Card padding, gaps |
| `space-8` | 32px | Section margins |
| `space-12` | 48px | Large spacing |
| `space-16` | 64px | Hero/section boundaries |

**Aspect:** Never cramped. Breathing room = elegance. Whitespace is material.

---

## Border Radius

**Philosophy:** Subtle softness (not sharp lines, not fully round)

| Token | Value | Use |
|-------|-------|-----|
| `radius-sm` | 3px | Small details |
| `radius-md` | 6px | Cards, inputs, buttons |
| `radius-lg` | 10px | Large sections |
| `radius-xl` | 16px | Hero elements, modals |

---

## Shadows & Elevation

**System:** Subtle depth (not harsh, not invisible)

| Level | Box-Shadow | Depth | Use |
|-------|-----------|-------|-----|
| `shadow-xs` | `0 1px 2px rgba(15,23,42,0.04)` | Micro | Text, badges |
| `shadow-sm` | `0 2px 4px rgba(15,23,42,0.08)` | Thin | Cards at rest |
| `shadow-md` | `0 4px 12px rgba(15,23,42,0.12)` | Medium | Interactive hover |
| `shadow-lg` | `0 8px 20px rgba(15,23,42,0.15)` | Deep | Lifted states |
| `shadow-gold` | `0 0 20px rgba(212,165,116,0.3)` | Glow | Gold accents on dark |
| `shadow-cyan` | `0 0 20px rgba(34,211,238,0.2)` | Glow | Cyan accents (Beholder eyes) |

---

## Motion Tokens

**Philosophy:** Purposeful, never frenetic. Elegance through restraint.

| Token | Duration | Easing | Use |
|-------|----------|--------|-----|
| `motion-fast` | 150ms | cubic-bezier(0.4, 0, 0.2, 1) | Icon reveals, micro |
| `motion-normal` | 250ms | cubic-bezier(0.4, 0, 0.2, 1) | Tab switches, hovers |
| `motion-slow` | 350ms | cubic-bezier(0.4, 0, 0.2, 1) | Page transitions, reveals |

**Easing:** Material Design smooth (cubic-bezier 0.4, 0, 0.2, 1) — no bounce, no spring. Classical grace.

---

## Base Components

### Button
- **Default:** `navy-700` background, `gold-400` text, `radius-md`
- **Border:** None (filled is more elegant than outlined)
- **Hover:** `navy-900` bg, subtle `shadow-md`
- **Padding:** `space-3` vertical, `space-6` horizontal
- **Font:** Serif, 600 weight, 1rem

### Card
- **Background:** `navy-50` (light mode) or `navy-100`
- **Border:** 1px solid `gold-400` (subtle gold frame)
- **Padding:** `space-6`
- **Radius:** `radius-md`
- **Shadow:** `shadow-sm` (at rest)
- **On Hover:** `shadow-md`, border glows faintly gold

### Input / Textarea
- **Background:** `navy-50`
- **Border:** 1px solid `gold-200`
- **Focus:** `gold-400` border, `shadow-md`, `gold` glow
- **Text:** `neutral-text`, serif for labels, sans for input
- **Padding:** `space-3` (12px)
- **Radius:** `radius-md`

### Tab (Active Navigation)
- **Inactive:** `neutral-secondary` text
- **Active:** `gold-400` text, `gold-400` bottom border (3px)
- **Transition:** `motion-normal`
- **Font:** Serif, 600 weight
- **Hover:** Gold text brightens slightly

### Badge / Label
- **No vibrant neons.** Use sparingly:
  - Gold badge: `gold-900` text on `gold-50` bg
  - Cyan badge: `cyan-600` text on `cyan-50` bg
  - Neutral badge: `neutral-text` on `navy-100`
- **Padding:** `space-2` × `space-3`
- **Radius:** `radius-sm`
- **Font:** Sans, 500 weight, small

### Status Indicator (no hard neon)
- **Active:** Cyan glow (`shadow-cyan`) + `cyan-400` dot
- **Idle:** Gold glow (`shadow-gold`) + `gold-400` dot
- **Error:** `gold-700` border + gray dot (elegant restraint)
- **Disabled:** `neutral-secondary` text, no glow

---

## Color Combinations (Accessible)

| Foreground | Background | Contrast | Use |
|-----------|-----------|----------|-----|
| `gold-700` | `navy-50` | 7.8:1 | Text on light |
| `navy-900` | `navy-50` | 9.2:1 | Primary body text |
| `neutral-secondary` | `navy-50` | 5.4:1 | Secondary body |
| `gold-400` | `navy-900` | 5.1:1 | Accent on dark |
| `cyan-400` | `navy-900` | 4.8:1 | Glow on dark (Beholder eyes) |

---

## Grid & Layout

- **Max-width:** 1200px (classical proportion)
- **Padding:** `space-12` (48px) sides on desktop, `space-6` (24px) on tablet
- **Column gap:** `space-6` (24px)
- **Row gap:** `space-8` (32px) between sections
- **Hero:** Full bleed, 100vh or 60vh (image as hero, text overlay in bottom-left/center)

---

## Typography Hierarchy

```
H1 (Serif, 3.5rem) — Page title, grand statements
H2 (Serif, 2.25rem) — Section headers, divisions
H3 (Serif, 1.5rem) — Subsections
H4 (Sans, 1.125rem) — Component labels
Body (Sans, 1rem) — Reading content
Small (Sans, 0.9rem) — Metadata, captions
Code (Mono, 0.875rem) — Technical details
```

---

## Implementation Notes

- **Image first:** The Beholder hero image sets the visual tone. All colors, shadows, glows support it.
- **No color bloat:** Gold + Cyan + Navy only. No reds, greens, or purples.
- **Elegance over playfulness:** Every element serves meaning, not decoration.
- **Glows are functional:** Gold glow = interactive, Cyan glow = active (Beholder's eyes watching).
- **Serif is brand:** Georgia in headings. Never use sans for titles — serif = authority, elegance.
- **Whitespace is luxury:** Dense but never cramped.
- **Motion is restraint:** 250ms smooth, no bounce. Classical grace.

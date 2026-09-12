---
name: Katsuotz Portfolio
description: A Swiss-inspired product gallery for software systems made useful.
colors:
  canvas-light: '#F7F8FA'
  surface-light: '#FFFFFF'
  deep-light: '#ECEEF2'
  ink-light: '#151820'
  muted-light: '#596170'
  accent-light: '#2448D8'
  accent-hover-light: '#1938B5'
  on-accent-light: '#FFFFFF'
  canvas-dark: '#111318'
  surface-dark: '#1B1E26'
  deep-dark: '#242833'
  ink-dark: '#F2F4F8'
  muted-dark: '#A8B0BF'
  accent-dark: '#93ACFF'
  accent-hover-dark: '#B2C3FF'
  on-accent-dark: '#111318'
typography:
  display:
    fontFamily: 'Geist, sans-serif'
    fontSize: 'clamp(2.75rem, 5vw, 4rem)'
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: '-0.04em'
  headline:
    fontFamily: 'Geist, sans-serif'
    fontSize: 'clamp(2.65rem, 7vw, 6rem)'
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: '-0.04em'
  title:
    fontFamily: 'Geist, sans-serif'
    fontSize: 'clamp(1.5rem, 2.3vw, 2rem)'
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: '-0.03em'
  body:
    fontFamily: 'Geist, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'IBM Plex Mono, monospace'
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: '0.08em'
    fontFeature: 'normal'
  control:
    fontFamily: 'Geist, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: '0.01em'
rounded:
  control: '0.25rem'
  dialog: '0.5rem'
spacing:
  xs: '0.5rem'
  sm: '1rem'
  md: '1.5rem'
  lg: '2rem'
  xl: '3rem'
  2xl: '4.5rem'
  3xl: '7rem'
components:
  button-primary:
    backgroundColor: '{colors.accent-light}'
    textColor: '{colors.on-accent-light}'
    rounded: '0'
    padding: '0.75rem 1.25rem'
    height: '3rem'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.ink-light}'
    rounded: '0'
    padding: '0.75rem 1rem'
    height: '3rem'
  navigation:
    backgroundColor: '{colors.canvas-light}'
    textColor: '{colors.ink-light}'
    rounded: '0'
    padding: '0 1.25rem'
    height: '3.75rem'
  image-caption:
    backgroundColor: 'transparent'
    textColor: '{colors.ink-light}'
    rounded: '0'
    padding: '0'
  grouped-list:
    backgroundColor: 'transparent'
    textColor: '{colors.ink-light}'
    rounded: '0'
    padding: '0'
---

# Design System: Katsuotz Portfolio

## Overview

**Creative North Star: "The Product Gallery"**

The portfolio gives each project the attention of a carefully edited product catalogue: a real interface leads, while concise context explains the engineering judgment behind it. The visual language is Swiss-inspired and precise, using alignment, proportion, and whitespace to make the work easy to inspect. The opening composition follows the calm, open image-and-caption rhythm visible in [Helena Zhang's homepage](https://www.helenazhang.com/).

The experience is calm and tactile. Cool paper surfaces in light mode and deep blue-black surfaces in dark mode hold full-color project imagery; a single blue accent marks action, focus, and selected state. The masthead and footer stay quiet so the work remains the visual center. Identity is modest, the introduction stands on its own before selected work, and credentials remain plain grouped lists.

**Key Characteristics:**

- Real project screenshots presented as open image-and-caption entries.
- Large aligned grids with generous whitespace and deliberate asymmetry.
- One blue accent reserved for action, focus, and state.
- Geist for editorial reading, with IBM Plex Mono for dates and technical metadata.

## Colors

The palette pairs cool paper neutrals with a measured blue identity that remains legible across light and dark themes.

### Primary

- **Cobalt Blue** (#2448D8): Light-theme actions, selected states, links, and focus treatment.
- **Clear Blue** (#93ACFF): Dark-theme actions, selected states, links, and focus treatment.

### Neutral

- **Light Canvas** (#F7F8FA): Light-theme page field.
- **Light Surface** (#FFFFFF): Light-theme project imagery and navigation surfaces.
- **Light Deep Surface** (#ECEEF2): Light-theme inset media fields and quiet separators.
- **Light Ink** (#151820): Light-theme primary text.
- **Light Muted Ink** (#596170): Light-theme supporting text and metadata.
- **Dark Canvas** (#111318): Dark-theme page field.
- **Dark Surface** (#1B1E26): Dark-theme project imagery and navigation surfaces.
- **Dark Deep Surface** (#242833): Dark-theme inset media fields and quiet separators.
- **Dark Ink** (#F2F4F8): Dark-theme primary text.
- **Dark Muted Ink** (#A8B0BF): Dark-theme supporting text and metadata.
- **On-Light Accent** (#FFFFFF): Text placed on the light-theme accent.
- **On-Dark Accent** (#111318): Text placed on the dark-theme accent.

**The Single Accent Rule.** Reserve blue for an action, focus ring, selected state, or link so its meaning stays clear.

## Typography

**Display Font:** Geist (sans-serif fallback)<br />
**Body Font:** Geist (sans-serif fallback)<br />
**Label/Mono Font:** IBM Plex Mono (monospace fallback)

**Character:** Geist keeps headings crisp and contemporary while remaining comfortable for project descriptions. IBM Plex Mono provides a measured texture for dates and technical metadata without changing the voice of ordinary prose.

### Hierarchy

- **Display** (400, `clamp(2.75rem, 5vw, 4rem)`, 0.9): Portfolio identity and opening statement.
- **Headline** (400, `clamp(2.65rem, 7vw, 6rem)`, 0.94): Major section introductions and editorial statements.
- **Title** (500, `clamp(1.5rem, 2.3vw, 2rem)`, 1.25): Featured project names and supporting headings.
- **Body** (400, 1rem, 1.65; 1.125rem at xl): Descriptions and explanatory copy, kept to a readable measure.
- **Label** (400, 0.75rem, 1.45, 0.08em): Dates and compact technical metadata, set in IBM Plex Mono where measured values need emphasis.
- **Control** (500, 0.75rem, 1.45, 0.01em): Navigation, actions, and theme controls in Geist.

**The Metadata Type Rule.** Use mono only when text records a date, technical measure, or compact metadata value; keep navigation, actions, and narrative copy in Geist.

## Layout

Non-log routes use a centered container capped at 1440px with 20px mobile gutters, 32px tablet gutters, and 64px desktop gutters. The homepage introduction is a standalone two-column text composition at medium widths, vertically centered across its columns, with 3rem mobile and 5rem desktop vertical padding. It is followed by a selected-work section with 3rem mobile and 4rem medium-up vertical padding. Its compact heading uses `clamp(2.2rem, 5vw, 4.5rem)`; the inline projects link shares that heading row, the description sits below, and a four-record two-column open image-and-caption gallery begins after a 2rem gap with Shieldbase first. The full project collection keeps a compact `clamp(2.75rem, 7vw, 4rem)` heading and uses a two-column gallery from `md` with 40px column gaps and 64–80px row gaps. Other project collections use the same open image-and-caption pattern. At mobile widths, each section becomes a single reading order.

Section spacing follows the existing editorial rhythm from 1.5rem around captions and metadata through 7rem around major transitions. Images keep their native proportions and sit directly in the shared grid. The masthead remains compact and the footer closes with a clear contact action.

## Elevation & Depth

Depth comes from tonal layering, fine rules, and image scale. Raised surfaces separate project content from the canvas; deep surfaces support inset media and quiet metadata. The open page stays flat, with depth reserved for the project detail dialog.

### Shadow Vocabulary

- **Dialog depth** (`0 28px 80px var(--color-shadow)`): Separates project detail from the page while preserving the quiet surface language.

## Shapes

The form language is mostly square: navigation, actions, project imagery, and captions remain open in the page flow. Theme toggle controls use a 4px radius and dialogs use an 8px radius. Fine rules separate navigation or metadata rows, while full-bleed media gives each entry a strong silhouette. Focus rings use the accent blue with a visible offset.

## Components

### Buttons

- **Shape:** Square corners with a 44px minimum height; the theme toggle uses a 4px radius.
- **Primary:** Accent background with on-accent text, Geist label, and `0 1rem` horizontal padding.
- **Hover / Focus:** Move to the theme-specific accent-hover color on hover; use a 2px accent focus outline with 4px offset.
- **Secondary / Ghost:** Transparent controls with muted text that resolves to primary ink on hover.

### Image-and-Caption Entries

- **Structure:** Full-color image followed by title, concise caption, and factual metadata in normal document flow.
- **Surface:** Page canvas or image itself; no enclosing filled card treatment.
- **Boundary:** Whitespace and alignment establish grouping; accent is reserved for active links and focus.
- **Internal Spacing:** 1.5–2rem between image, caption, and metadata; 0.75–1rem within metadata rows.

### Navigation

The sticky masthead uses a page-colored surface, a bottom rule, and Geist route labels with an always-available theme control. Links use the accent for hover and focus. Mobile navigation preserves the same destinations in a keyboard-accessible disclosure.

### Product Tile

Each entry leads with a full-color project screenshot, followed by name, concise existing description, and factual tag/year metadata. Hover and focus use a restrained image scale or link-color transition; the entry opens the existing project detail dialog.

### Grouped Lists

Education, recognition, and skills use plain grouped text lists with clear dates and role metadata. Alignment and spacing establish hierarchy, while the accent is reserved for section labels or active links.

## Do's and Don'ts

### Do:

- **Do** let real project screenshots and authored descriptions carry the proof.
- **Do** use the shared grid, generous whitespace, and full-color imagery to establish hierarchy.
- **Do** keep light and dark themes structurally consistent while adapting surface and accent values.
- **Do** preserve visible focus, keyboard access, Escape dismissal, and reduced-motion behavior.

### Don't:

- **Don't** invent project outcomes, benchmarks, testimonials, or customer claims.
- **Don't** dilute the blue accent with competing decorative colors or persistent glow effects.
- **Don't** replace authored project imagery with generic gradients or stock scenes.
- **Don't** use mono for narrative body copy or motion that gates content.

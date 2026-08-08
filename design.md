---
name: Katsuotz Portfolio
description: A broadcast field guide for software systems made useful.
colors:
  canvas-light: '#F4F6F8'
  surface-light: '#FFFFFF'
  deep-light: '#E7EBEF'
  ink-light: '#0A0D12'
  muted-light: '#5C6673'
  accent-light: '#2457F5'
  canvas-dark: '#0B0A08'
  surface-dark: '#1B1813'
  deep-dark: '#15130F'
  ink-dark: '#F2EEE6'
  muted-dark: '#AAA39A'
  accent-dark: '#F04E36'
typography:
  display:
    fontFamily: 'Archivo Black, sans-serif'
    fontSize: 'clamp(3rem, 15vw, 12rem)'
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: '-0.08em'
  headline:
    fontFamily: 'Archivo Black, sans-serif'
    fontSize: 'clamp(2.65rem, 13vw, 6.6rem)'
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: '-0.07em'
  body:
    fontFamily: 'IBM Plex Sans, sans-serif'
    fontSize: '1rem'
    fontWeight: 300
    lineHeight: 1.7
  label:
    fontFamily: 'IBM Plex Mono, monospace'
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: '0.1em'
    fontFeature: 'normal'
rounded:
  sm: '0.45rem'
  md: '0.6rem'
spacing:
  sm: '0.75rem'
  md: '1.5rem'
  lg: '3rem'
  xl: '7rem'
components:
  button-primary:
    backgroundColor: '{colors.accent-light}'
    textColor: '#FFFFFF'
    rounded: '0'
    padding: '0.875rem 1.25rem'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.muted-light}'
    rounded: '{rounded.sm}'
    padding: '0.75rem 1rem'
  replay-frame:
    backgroundColor: '{colors.surface-light}'
    textColor: '{colors.ink-light}'
    rounded: '0'
    padding: '0'
  evidence-panel:
    backgroundColor: '{colors.surface-light}'
    textColor: '{colors.ink-light}'
    rounded: '0'
    padding: '1.5rem'
---

# Design System: Katsuotz Portfolio

## Overview

**Creative North Star: "The Broadcast Field Guide"**

The portfolio treats each project as a replayable signal: a real interface, a
working context, and the engineering judgment that made it useful. The visual
language borrows the discipline of broadcast control surfaces—channel labels,
lower-thirds, timing marks, and hard-edged frames—without inventing scores,
live telemetry, or game-like stakes.

The surface is editorial and technical at once. Paper-like canvases keep the
reading experience calm; cobalt in light mode and orange in dark mode mark the
active signal; thin rules and a calibration grid give the page a measured
field without decorative chrome. Content is visible at first paint, and the
same channel grammar carries from navigation to project proof to the contact
close.

**Key Characteristics:**

- Hard-edged replay frames and evidence-led panels.
- Channel rails that support fast scanning and deep reading.
- One accent signal per theme, used for action and state.
- Editorial typography with mono labels reserved for metadata.

## Colors

The palette is a cool paper field in light mode and a warm instrument panel in
dark mode; the accent is the active broadcast signal.

### Primary

- **Cobalt Signal** (#2457F5): Primary action, active channel, focus, and current-state markers in light mode.
- **Orange Signal** (#F04E36): Primary action, active channel, focus, and current-state markers in dark mode.

### Neutral

- **Paper Field** (#F4F6F8): Light-mode canvas.
- **Raised Paper** (#FFFFFF): Light-mode replay and evidence surfaces.
- **Deep Paper** (#E7EBEF): Light-mode inset fields and rules.
- **Instrument Black** (#0B0A08): Dark-mode canvas.
- **Raised Instrument** (#1B1813): Dark-mode replay and evidence surfaces.
- **Deep Instrument** (#15130F): Dark-mode inset fields and rules.
- **Ink** (#0A0D12 / #F2EEE6): Primary text in light / dark mode.
- **Muted Ink** (#5C6673 / #AAA39A): Supporting copy and metadata in light / dark mode.

**The Single Signal Rule.** Use the active accent to identify action or state;
do not scatter competing decorative colors across a surface.

## Typography

**Display Font:** Archivo Black (sans-serif fallback)<br />
**Body Font:** IBM Plex Sans (sans-serif fallback)<br />
**Label/Mono Font:** IBM Plex Mono (monospace fallback)

**Character:** Archivo Black provides a compressed, declarative voice for
identity and section headlines. IBM Plex Sans carries long descriptions with
calm readability; IBM Plex Mono is reserved for channels, dates, controls, and
measured metadata.

### Hierarchy

- **Display** (400, `clamp(3rem, 15vw, 12rem)`, 0.86): Portfolio identity and hero name.
- **Headline** (400, `clamp(2.65rem, 13vw, 6.6rem)`, 0.9): Section statements and major proof claims.
- **Title** (500, 1.25–3rem, 0.95): Project, role, school, and recognition names.
- **Body** (300, 1rem, 1.7): Descriptions and explanatory copy, kept to a readable measure.
- **Label** (400, 0.75rem, 1.45, 0.1em, uppercase): Navigation, channels, dates, and controls.

**The No-Costume Mono Rule.** Mono appears when a value is a label, measure,
date, channel, or control; it is not used to make ordinary prose look
technical.

## Layout

Desktop uses a wide editorial container with a fixed masthead and a narrow
calibration rail. The homepage opens with a full-height lower-third identity
field, then moves into an asymmetric active replay and compact channel stack.
Experience and credentials follow as evidence bands, finishing with a full
accent contact close.

At mobile widths the rail disappears, the masthead becomes a native disclosure,
and project channels stack vertically while preserving their order. Horizontal
overflow is never used to express the broadcast metaphor. Spacing expands above
headings and contracts inside labels, with section padding scaling from 5rem to
11rem.

## Elevation & Depth

Depth is primarily tonal and structural: paper fields, 1px rules, framed media,
and a restrained ambient shadow on the masthead and active replay. Shadows are
never used as colored halos. Motion is limited to transform, color, and opacity,
with reduced-motion removing spatial movement.

### Shadow Vocabulary

- **Masthead ambient** (`0 12px 48px var(--home-shadow)`): Keeps the fixed navigation legible over the field.
- **Active replay** (`0 24px 60px var(--home-shadow)`): Separates the primary project frame from the canvas.

## Shapes

The system is rectilinear and instrument-like: most content is square-cornered
with 1px rules; small controls may use the existing 0.45rem radius, and dialogs
retain the established 0.8rem treatment. Images crop inside frames rather than
floating as decorative cards.

## Components

### Buttons

- **Shape:** Square primary action; small control radius for secondary actions.
- **Primary:** Accent field with on-accent text, mono uppercase label, and 0.875rem × 1.25rem padding.
- **Hover / Focus:** Darken or lighten the signal, translate up by a small step, and use a visible 2px accent outline on focus.
- **Secondary / Ghost:** Transparent or paper-backed controls with a 1px rule and muted ink that resolves to primary ink on hover.

### Cards / Containers

- **Corner Style:** Square for replay/evidence surfaces; small radius only for controls and dialogs.
- **Background:** Paper or raised instrument surface per theme.
- **Shadow Strategy:** Structural borders at rest; ambient shadow only on the masthead and active replay.
- **Border:** 1px theme rule, with accent reserved for active/focus state.
- **Internal Padding:** 1.25–2.5rem for content; 0.75–1rem for metadata rows.

### Navigation

The desktop masthead is fixed, bordered, and centered in the field. Labels use
mono uppercase with an accent underline on hover. Mobile navigation is a
keyboard-accessible disclosure with the same route labels and a persistent theme
toggle.

### Replay Frame

The selected project owns the largest visual surface. Its real screenshot is
framed by a channel/year lower-third; neighboring projects remain compact,
selectable channels that open the existing Radix dialog with full detail.

## Do's and Don'ts

### Do:

- **Do** let real project screenshots and factual descriptions carry the proof.
- **Do** use channel labels, timing marks, and rules when they clarify sequence or state.
- **Do** keep light and dark themes structurally identical while resolving their signal accent.
- **Do** preserve keyboard focus, Escape dismissal, visible labels, and reduced-motion behavior.

### Don't:

- **Don't** invent scores, live telemetry, benchmarks, testimonials, or customer claims.
- **Don't** turn the broadcast metaphor into neon gaming HUDs, glowing edges, or decorative glass.
- **Don't** replace authored project imagery with generic gradients or stock scenes.
- **Don't** use mono for body copy or add motion that gates content.

# Design — Katsuotz Portfolio

The non-log portfolio routes share one editorial technical field-guide system.
The existing copy, data, media, links, theme behavior, and route ownership are
content contracts; this document governs their presentation only.

## Genre

Editorial with a technical, restrained, human voice.

## Macrostructure family

- Homepage: Split Studio — alternating text and proof, with the existing section order.
- Projects: Portfolio Grid — work is the index, with full descriptions and modal detail.
- Showcase: Workbench — interactive previews and source code are primary.
- 404: quiet Long Document treatment inside the shared shell.

## Theme

- Light paper: `#F4F6F8`; raised paper: `#FFFFFF`; deep paper: `#E7EBEF`.
- Light ink: `#0A0D12`; muted: `#5C6673`; accent: `#2457F5`.
- Dark paper: `#0B0A08`; raised paper: `#1B1813`; deep paper: `#15130F`.
- Dark ink: `#F2EEE6`; muted: `#AAA39A`; accent: `#F04E36`.
- Accents remain small, deliberate, and never form decorative gradients.

## Typography

- Display: Archivo Black, roman, used for names and section titles.
- Body: IBM Plex Sans, readable and restrained.
- Mono: IBM Plex Mono, reserved for metadata and controls.
- Display headings wrap safely and never use italic styling.

## Motion and interaction

- Content is visible at first paint; no scroll-triggered content gating.
- Transitions use named easing tokens and only animate color, opacity, or transform.
- Dialogs retain Radix focus management and Escape dismissal.
- Mobile navigation is a keyboard-accessible disclosure using existing link labels.
- `prefers-reduced-motion` removes spatial movement and keeps functional changes.

## Shared chrome

- Navigation: masthead-style fixed rail on desktop, compact disclosure on mobile.
- Footer: statement-led contact close with existing copy and links.
- Existing `/log` navigation remains available, but all log routes retain their legacy treatment.

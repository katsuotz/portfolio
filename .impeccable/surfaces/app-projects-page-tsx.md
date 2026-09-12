---
version: 1
slug: "app-projects-page-tsx"
primary_target: "app/projects/page.tsx"
related_targets: ["components/home/project.tsx","components/home/project-item.tsx"]
---

## Scope

Experience: all sixteen existing software project records. Visitors scan screenshots and metadata, then open a project for the existing description and optional external destination.

## Direction contract

THESIS: Make a broad engineering portfolio easy to inspect through large, legible product screenshots paired with open captions.

OWN-WORLD: Swiss-inspired product gallery with Geist Sans, neutral light and dark surfaces, blue actions in both themes, generous whitespace, and original-color imagery. IBM Plex Mono serves dates and technical metadata.

REFERENCE: Use the open image-and-caption rhythm visible in [Helena Zhang's homepage](https://www.helenazhang.com/) as the composition reference for separated project entries.

STORY: Visitors scan projects in source order, read titles and factual metadata, open details, and follow existing external project links.

FIRST VIEWPORT: A compact `clamp(2.75rem, 7vw, 4rem)` page heading and introduction lead into the first two project previews on desktop. Each preview uses 16:10 media capped at 420px, with one column on mobile.

FORM: User-approved two-column open screenshot gallery from `md` upward with 40px column gaps and 64px desktop row gaps; mobile uses one column with an 80px row gap. Every entry uses 16:10 media capped at 420px, followed by a 24–32px title, concise caption, and factual tag/year metadata without logo tiles, decorative arrow boxes, or enclosing filled cards. Existing Radix dialogs retain keyboard activation, close controls, Escape dismissal, and focus return. No random seed applies.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Contracts

Preserve all 16 project records, order, screenshots, descriptions, metadata, optional links, and existing dialog behavior. Keep the open all-project presentation explicit alongside the homepage four-project variant.

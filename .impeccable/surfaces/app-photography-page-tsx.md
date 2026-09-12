---
version: 1
slug: "app-photography-page-tsx"
primary_target: "app/photography/page.tsx"
related_targets: ["components/home/photography.tsx","components/photography/photo-figure.tsx"]
---

## Scope

Experience: ten original photographs and the three-image homepage introduction. Preserve order, natural proportions, captions, and stable image anchors.

## Direction contract

THESIS: Let the original photographs carry the experience through open image-and-caption entries, quiet captions, and generous spacing.

OWN-WORLD: Swiss-inspired product gallery with Geist Sans, neutral light and dark surfaces, blue actions in both themes, generous whitespace, and original-color imagery. IBM Plex Mono serves dates and technical metadata.

REFERENCE: The open composition follows the calm editorial rhythm visible in [Helena Zhang's homepage](https://www.helenazhang.com/), where imagery and captions remain distinct from enclosing cards.

STORY: Visitors follow the homepage collection link or a specific photograph to browse all ten images and their captions.

FIRST VIEWPORT: Compact Photography heading and existing introduction followed by the orange-backpack landscape. A sticky shared masthead preserves access to other portfolio pages.

FORM: User-approved open sequence: one full-width photograph followed by two top-aligned photographs, repeating in source order on desktop; a single column on mobile. Each photograph keeps its image, caption, and metadata visible without a filled card wrapper. Homepage photo links continue to land at the corresponding gallery anchors. No random seed applies.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Contracts

Use existing repository photography assets and metadata. Keep native lazy loading, the first gallery image's priority loading, theme persistence, keyboard focus, and reduced motion.

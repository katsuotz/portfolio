# Project Instructions

## Project Overview

- This is Muhammad Irfan Fakhri's portfolio built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4.
- The site is statically exported with `output: 'export'`; production must not depend on a Node.js server, server actions, runtime API routes, or request-time rendering.
- Every route shares one system-aware Light/Dark preference. Non-log routes use the editorial palettes, while `/log` and its dated entries retain their legacy layout and visual treatment.
- Preserve existing portfolio copy, dates, links, analytics, and project data unless the user asks to change them.

## Package Manager and Commands

- Use Bun only. Do not use npm, Yarn, pnpm, or create their lockfiles.
- Treat `bun.lock` as the only dependency lockfile.
- Install and remove dependencies with `bun add`, `bun add --dev`, and `bun remove`.
- Prefer existing dependencies and platform APIs before adding a package.
- Common commands:
  - `bun dev` starts Turbopack on port 8081.
  - `bun run lint` runs type-aware Oxlint and TypeScript checks.
  - `bun run build` creates the static export in `out/`.
  - `bunx oxfmt <touched-files>` formats only the files changed by the task.
- Do not run the repository-wide formatter in a dirty worktree unless the user explicitly requests a full formatting pass.

## Repository Structure

- `app/` contains App Router pages, layouts, metadata, and global styles.
- `components/home/` contains homepage and shared portfolio sections.
- `components/ui/` contains shared Radix/shadcn-style primitives.
- `context/` and `hooks/` contain client-side state and reusable hooks.
- `lib/` contains shared utilities; use `cn()` from `lib/utils.ts` for conditional Tailwind classes.
- `public/` contains images and static assets. Reference them with root-relative paths such as `/project/example.webp`.
- Never edit generated or dependency directories such as `.next/`, `out/`, or `node_modules/`.

## React and Next.js

- Use Server Components by default. Add `'use client'` only when browser APIs, event handlers, React state, effects, or client-only libraries require it.
- Keep client-component boundaries as small as practical and avoid sending static content through client providers.
- Use the `@/` path alias for internal imports.
- Keep TypeScript strict and avoid `any`, unsafe casts, and suppressed errors unless unavoidable and documented.
- Use `next/image` for repository images and `next/link` for internal navigation.
- Because images are statically exported with `unoptimized: true`, provide correct dimensions, responsive sizing, meaningful alt text, and native lazy loading where appropriate.
- Keep route-specific metadata in the relevant layout or metadata export.
- Do not introduce features incompatible with static export.

## Styling

- Use Tailwind CSS utilities first for layout, spacing, sizing, typography, colors, responsive behavior, and interaction states.
- Use native CSS only when Tailwind is unsuitable, such as design tokens, pseudo-elements, keyframes, complex visual effects, or third-party portal overrides.
- Keep custom component styles scoped. Prefer CSS Modules over adding component-specific rules to `app/globals.css`.
- Reserve `app/globals.css` for Tailwind setup, global tokens, resets, shared utilities, and genuinely global behavior.
- Avoid mixing Tailwind utilities with native CSS overrides for the same property.
- Avoid `!important` unless required to override an external or portaled component and no cleaner variant API is available.
- Reuse design tokens rather than repeating literal colors. The homepage Light palette is canvas `#F4F6F8`, surface `#E7EBEF`, ink `#0A0D12`, muted `#5C6673`, and cobalt `#2457F5`; Dark restores canvas `#0B0A08`, surface `#15130F`, ink `#F2EEE6`, muted `#AAA39A`, and orange `#F04E36`.
- Keep site theme state under the shared `home-theme` storage key. With no stored override, follow `prefers-color-scheme`; do not recreate or reuse the removed `dark-mode` key.
- Preserve the existing component variants that isolate visual systems, including project `bento`/`registry` and footer `editorial`/`default` variants.
- Apply the shared editorial tokens and shell to all non-log routes. Logs share the theme state and `.dark` class but keep their own styling.
- Keep the K/O favicon synchronized with the resolved editorial theme while retaining the Light SVG as the no-JavaScript fallback.

## Design, Accessibility, and Performance

- Maintain the established editorial layout: oversized typography, restrained color, asymmetric bento sections, subtle translucency, and limited purposeful motion.
- Avoid generic AI-template patterns such as excessive glass cards, rounded containers, gradients, glows, and scroll-triggered animation on every section.
- Use semantic HTML and preserve heading hierarchy, landmarks, skip links, labels, and descriptive accessible names.
- All interactive elements must be keyboard accessible with visible focus states. Dialogs must support focus management and Escape dismissal.
- Maintain WCAG AA text contrast and honor `prefers-reduced-motion`.
- Verify responsive behavior at 375px, 768px, 1440px, and 1920px, including horizontal overflow and text clipping.
- Prefer CSS interactions and native lazy loading. Avoid unnecessary scroll listeners, hydration, large animation libraries, or heavy visual runtimes.

## Shared Components and Content

- Check all usages before changing a shared component; `Project`, `ProjectItem`, `Footer`, `BackToTop`, and social components are used by multiple routes.
- Preserve behavior and styling of routes outside the requested scope by adding or using explicit variants rather than route-dependent hacks.
- Keep portfolio data in its existing source unless a task specifically requests a data refactor.
- External links opened in a new tab must include `rel="noreferrer"` or the appropriate safe equivalent.
- Do not change Google Analytics configuration or identifiers unless explicitly requested.

## Verification

- For code or styling changes, run:
  1. `bun run lint`
  2. `bun run build`
  3. `git diff --check`
- The Next.js build currently ignores TypeScript build errors, so a successful build does not replace the required type-aware lint check.
- For UI work, manually verify the affected routes and responsive widths in addition to linting and building.
- Confirm dialogs, navigation anchors, external links, mail links, keyboard focus, and reduced-motion behavior when those areas are affected.
- There is no established automated test suite. Do not introduce a test framework unless the user requests it or the task clearly requires one.

## Deployment and Generated Output

- The deployment source of truth is `.github/workflows/deploy.yml`.
- Pushing `master` triggers the production deployment workflow, which builds with Bun and reloads Nginx.
- Do not edit deployment configuration, generated `out/` content, analytics, or server settings unless the task explicitly includes deployment.
- The existing `Dockerfile` uses a different runtime workflow and is not the source of truth for the static production deployment.
- Never expose, print, commit, or hardcode credentials, environment values, or GitHub secrets.

## Git and Change Discipline

- Preserve unrelated working-tree changes and never discard user modifications.
- Keep changes narrowly scoped to the request and avoid opportunistic refactors.
- Review `git status` and `git diff` before handing off work.
- Use semantic commit messages in the form `type: concise description`.
- Only commit or push when the user explicitly asks.
- Never push `master` without explicit user authorization because it triggers production deployment.

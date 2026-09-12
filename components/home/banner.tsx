import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

const YEAR = new Date().getFullYear()
const START_YEAR = 2019

export default function Banner() {
  return (
    <section
      className="mx-auto grid w-full max-w-[1440px] gap-10 border-b border-[var(--home-line)] px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-16 md:py-20 lg:px-16"
      aria-labelledby="hero-title"
    >
      <div>
        <h1
          id="hero-title"
          className="max-w-[8ch] font-[family-name:var(--font-home-display)] text-[clamp(2.75rem,5vw,4rem)] leading-[0.9] font-normal tracking-[-0.04em] text-[var(--home-ink)]"
        >
          Katsuotz
        </h1>
        <p className="mt-4 font-[family-name:var(--font-home-sans)] text-base text-[var(--home-ink)]">
          Muhammad Irfan Fakhri
        </p>
        <p className="mt-1 max-w-[36ch] font-[family-name:var(--font-home-sans)] text-base text-[var(--home-muted)]">
          Software Engineer / Full-Stack Developer
        </p>
        <p className="mt-2 font-[family-name:var(--font-home-sans)] text-base font-medium text-[var(--home-muted)]">
          Available for new opportunities
        </p>
      </div>

      <div className="grid max-w-[52ch] gap-5">
        <p
          className={cn(
            editorialType.body,
            'max-w-[34ch] text-[var(--home-muted)]'
          )}
        >
          I design and build dependable digital products where clear systems,
          thoughtful interfaces, and real-world scale meet. More than{' '}
          {YEAR - START_YEAR} years shipping across startups and enterprise
          teams.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            className={cn(
              editorialType.micro,
              'inline-flex min-h-11 items-center gap-2 bg-[var(--home-accent)] px-4 font-[family-name:var(--font-home-sans)] font-medium tracking-[0.01em] text-[var(--home-on-accent)] transition-colors hover:bg-[var(--home-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
            )}
            href="#selected-work"
          >
            Explore selected work <ArrowDownRightIcon aria-hidden="true" />
          </a>
          <a
            className={cn(
              editorialType.micro,
              'inline-flex min-h-11 items-center gap-2 font-[family-name:var(--font-home-sans)] tracking-[0.01em] text-[var(--home-muted)] transition-colors hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
            )}
            href="mailto:m.irfan.fakhri66@gmail.com"
          >
            Contact <ArrowUpRightIcon aria-hidden="true" />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span
            className={cn(
              editorialType.micro,
              'font-[family-name:var(--font-home-sans)] tracking-[0.01em] text-[var(--home-muted)]'
            )}
          >
            Indonesia · GMT+7
          </span>
          <a
            className={cn(
              editorialType.micro,
              'inline-flex min-h-11 items-center font-[family-name:var(--font-home-sans)] tracking-[0.01em] text-[var(--home-muted)] transition-colors hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
            )}
            href="https://github.com/katsuotz/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className={cn(
              editorialType.micro,
              'inline-flex min-h-11 items-center font-[family-name:var(--font-home-sans)] tracking-[0.01em] text-[var(--home-muted)] transition-colors hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
            )}
            href="https://www.linkedin.com/in/irfan-fakhri/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}

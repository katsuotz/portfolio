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
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden border-b border-[var(--home-line)] px-[max(1.25rem,4vw)] pt-[clamp(7rem,14vh,10rem)] pb-[clamp(3rem,8vh,6rem)]"
      aria-labelledby="hero-title"
    >
      <div className="home-atmosphere" aria-hidden="true" />

      <div className="noise-overlay home-hero-noise" aria-hidden="true" />

      <div
        className={cn(
          editorialType.micro,
          'absolute top-[clamp(5.75rem,12vh,8rem)] right-[max(1.25rem,4vw)] left-[max(1.25rem,4vw)] flex justify-between font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase max-[420px]:justify-end'
        )}
      >
        <p className="max-[420px]:hidden">Muhammad Irfan Fakhri</p>
        <p>Indonesia · GMT+7</p>
      </div>

      <div className="w-full">
        <div
          className={cn(
            editorialType.micro,
            'mb-[clamp(1.25rem,3vh,2rem)] flex items-center gap-2.5 font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase'
          )}
        >
          <span
            className="size-[0.45rem] rounded-full bg-[var(--home-accent)] shadow-[0_0_0_4px_var(--home-accent-ring)]"
            aria-hidden="true"
          />{' '}
          Available for new opportunities
        </div>

        <p className="flex flex-wrap items-center gap-3 text-[clamp(0.9rem,1.4vw,1.3rem)] tracking-[-0.02em] text-[var(--home-ink)] max-md:gap-2 max-md:text-[0.82rem]">
          <span>Software Engineer</span>
          <i className="not-italic text-[var(--home-accent)]">/</i>
          <span>Full-stack developer</span>
        </p>

        <h1
          id="hero-title"
          className="mt-[0.05em] w-full min-w-0 overflow-wrap-anywhere font-[family-name:var(--font-home-display)] text-[clamp(3.8rem,13vw,10rem)] leading-[0.92] font-normal tracking-[-0.065em] text-[var(--home-ink)] uppercase max-md:text-[clamp(3.1rem,16vw,6rem)] max-md:tracking-[-0.08em]"
        >
          Katsuotz
        </h1>

        <div className="mt-[clamp(2rem,5vh,4rem)] grid grid-cols-[minmax(0,36rem)_minmax(0,1fr)] items-end gap-16 border-t border-[var(--home-line)] pt-5 max-md:mt-8 max-md:grid-cols-1 max-md:gap-7">
          <p
            className={cn(
              editorialType.body,
              'font-light text-[var(--home-muted)]'
            )}
          >
            I design and build dependable digital products where clear systems,
            thoughtful interfaces, and real-world scale meet. More than{' '}
            {YEAR - START_YEAR} years shipping across startups and enterprise
            teams.
          </p>

          <div className="flex items-center justify-end gap-[clamp(1rem,2vw,2rem)] max-md:flex-wrap max-md:justify-start">
            <a
              className={cn(
                editorialType.micro,
                'inline-flex min-h-14 items-center gap-2.5 bg-[var(--home-accent)] px-5 font-[family-name:var(--font-home-mono)] font-medium tracking-[0.06em] text-[var(--home-on-accent)] uppercase transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--home-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] max-md:w-full max-md:justify-between motion-reduce:transform-none motion-reduce:transition-none [&_svg]:size-4'
              )}
              href="#selected-work"
            >
              Explore selected work
              <ArrowDownRightIcon aria-hidden="true" />
            </a>
            <a
              className={cn(
                editorialType.micro,
                'inline-flex min-h-11 items-center gap-2.5 font-[family-name:var(--font-home-mono)] tracking-[0.06em] text-[var(--home-muted)] uppercase transition-colors duration-200 hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none [&_svg]:size-4'
              )}
              href="https://github.com/katsuotz/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRightIcon aria-hidden="true" />
            </a>
            <a
              className={cn(
                editorialType.micro,
                'inline-flex min-h-11 items-center gap-2.5 font-[family-name:var(--font-home-mono)] tracking-[0.06em] text-[var(--home-muted)] uppercase transition-colors duration-200 hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none [&_svg]:size-4'
              )}
              href="https://www.linkedin.com/in/irfan-fakhri/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRightIcon aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <p
        className={cn(
          editorialType.micro,
          'absolute right-[max(1.25rem,4vw)] bottom-4 font-[family-name:var(--font-home-mono)] tracking-[0.12em] text-[var(--home-index)] uppercase max-md:hidden'
        )}
        aria-hidden="true"
      >
        Portfolio / 2026
      </p>
    </section>
  )
}

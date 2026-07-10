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
      className="relative isolate flex min-h-svh items-end overflow-hidden border-b border-[var(--home-line)] px-[max(1.25rem,4vw)] pt-[clamp(8rem,15vh,11rem)] pb-[clamp(2rem,5vh,4rem)] max-md:min-h-[46rem]"
      aria-labelledby="hero-title"
    >
      <div className="home-atmosphere" aria-hidden="true" />

      <div
        className={cn(
          editorialType.micro,
          'home-hero-reveal home-delay-1 absolute top-[clamp(6.5rem,14vh,9.5rem)] right-[max(1.25rem,4vw)] left-[max(1.25rem,4vw)] flex justify-between font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase max-md:top-24 max-[420px]:justify-end'
        )}
      >
        <p className="max-[420px]:hidden">Muhammad Irfan Fakhri</p>
        <p>Indonesia · GMT+7</p>
      </div>

      <div className="w-full">
        <div
          className={cn(
            editorialType.micro,
            'home-hero-reveal home-delay-2 mb-[clamp(1.25rem,3vh,2rem)] flex items-center gap-2.5 font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase'
          )}
        >
          <span
            className="size-[0.45rem] rounded-full bg-[var(--home-accent)] shadow-[0_0_0_4px_var(--home-accent-ring)]"
            aria-hidden="true"
          />{' '}
          Available for new opportunities
        </div>

        <p className="home-hero-reveal home-delay-2 flex items-center gap-3 text-[clamp(0.9rem,1.4vw,1.3rem)] tracking-[-0.02em] text-[var(--home-ink)] max-md:gap-2 max-md:text-[0.82rem]">
          <span>Software Engineer</span>
          <i className="not-italic text-[var(--home-accent)]">/</i>
          <span>Full-stack developer</span>
        </p>

        <h1
          id="hero-title"
          className="home-hero-reveal home-delay-3 mt-[0.05em] w-full whitespace-nowrap font-[family-name:var(--font-home-display)] text-[clamp(4.2rem,17.3vw,19rem)] leading-[0.82] font-normal tracking-[-0.065em] text-[var(--home-ink)] uppercase max-md:text-[clamp(2.7rem,12vw,6rem)] max-md:tracking-[-0.095em]"
        >
          Katsuotz
        </h1>

        <div className="home-hero-reveal home-delay-4 mt-[clamp(2rem,5vh,4rem)] grid grid-cols-[minmax(16rem,36rem)_1fr] items-end gap-16 border-t border-[var(--home-line)] pt-5 max-md:mt-8 max-md:grid-cols-1 max-md:gap-7">
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
          'home-hero-reveal home-delay-4 absolute right-[max(1.25rem,4vw)] bottom-4 font-[family-name:var(--font-home-mono)] tracking-[0.12em] text-[var(--home-index)] uppercase max-md:hidden'
        )}
        aria-hidden="true"
      >
        Portfolio / 2026
      </p>
    </section>
  )
}

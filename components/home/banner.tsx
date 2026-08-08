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
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-[var(--home-line)] pt-[clamp(7rem,15vh,10rem)] pb-[clamp(3rem,8vh,6rem)] pl-[max(1.25rem,4vw)] pr-[max(1.25rem,4vw)]"
      aria-labelledby="hero-title"
    >
      <div
        className="home-surface-grid pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[var(--home-rail-width)] border-r border-[var(--home-line)] md:block"
        aria-hidden="true"
      />

      <div className="absolute top-[clamp(5.75rem,12vh,8rem)] right-[max(1.25rem,4vw)] left-[max(1.25rem,4vw)] flex items-start justify-between md:pl-7">
        <span
          className={cn(
            editorialType.micro,
            'home-channel-rail hidden font-[family-name:var(--font-home-mono)] text-[var(--home-accent)] uppercase md:block'
          )}
        >
          Channel 01 · Personal signal
        </span>
        <p
          className={cn(
            editorialType.micro,
            'font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-muted)] uppercase'
          )}
        >
          Indonesia · GMT+7
        </p>
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-13rem)] w-full max-w-[96rem] flex-col justify-end md:pl-12">
        <div className="mb-6 flex items-center gap-2.5">
          <span
            className="home-signal size-[0.45rem] rounded-full"
            aria-hidden="true"
          />
          <span
            className={cn(
              editorialType.micro,
              'font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-muted)] uppercase'
            )}
          >
            Available for new opportunities
          </span>
        </div>

        <p
          className={cn(
            editorialType.micro,
            'mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-[family-name:var(--font-home-mono)] tracking-[0.12em] text-[var(--home-accent)] uppercase'
          )}
        >
          <span className="text-[var(--home-ink)]">Muhammad Irfan Fakhri</span>
          <span aria-hidden="true">/</span>
          <span>Software Engineer / Full-stack developer</span>
        </p>

        <h1
          id="hero-title"
          className="max-w-[10ch] font-[family-name:var(--font-home-display)] text-[clamp(4.1rem,15vw,12rem)] leading-[0.86] font-normal tracking-[-0.04em] text-[var(--home-ink)] uppercase max-md:text-[clamp(3rem,16vw,6rem)] max-md:tracking-[-0.07em]"
        >
          Katsuotz
        </h1>

        <div className="mt-[clamp(2.5rem,6vh,5rem)] grid items-end gap-8 border-t border-[var(--home-line)] pt-5 md:grid-cols-[minmax(0,38rem)_1fr] md:gap-16">
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

          <div className="flex items-center justify-start gap-5 md:justify-end">
            <a
              className={cn(
                editorialType.micro,
                'inline-flex min-h-14 items-center gap-2.5 bg-[var(--home-accent)] px-5 font-[family-name:var(--font-home-mono)] font-medium tracking-[0.06em] text-[var(--home-on-accent)] uppercase transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--home-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] max-md:flex-1 max-md:justify-between motion-reduce:transform-none motion-reduce:transition-none [&_svg]:size-4'
              )}
              href="#selected-work"
            >
              Explore selected work <ArrowDownRightIcon aria-hidden="true" />
            </a>
            <div className="hidden items-center gap-4 sm:flex">
              <a
                className={cn(
                  editorialType.micro,
                  'inline-flex min-h-11 items-center gap-2 font-[family-name:var(--font-home-mono)] tracking-[0.06em] text-[var(--home-muted)] uppercase transition-colors hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
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
                  'inline-flex min-h-11 items-center gap-2 font-[family-name:var(--font-home-mono)] tracking-[0.06em] text-[var(--home-muted)] uppercase transition-colors hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
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

        <div
          className={cn(
            editorialType.micro,
            'mt-5 flex items-center justify-between font-[family-name:var(--font-home-mono)] tracking-[0.1em] text-[var(--home-index)] uppercase'
          )}
        >
          <span>Field guide / 01</span>
          <span>Portfolio / {YEAR}</span>
        </div>
      </div>
    </section>
  )
}

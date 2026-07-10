import Link from 'next/link'
import EditorialShell from '@/components/home/editorial-shell'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export default function NotFound() {
  return (
    <EditorialShell route="not-found">
      <section className="mx-auto flex min-h-[72vh] max-w-[1500px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
        <p
          className={cn(
            'font-[family-name:var(--font-home-mono)] uppercase tracking-[0.18em] text-[var(--home-accent)]',
            editorialType.micro
          )}
        >
          Error / 404
        </p>
        <h1 className="mt-6 max-w-5xl text-balance font-[family-name:var(--font-home-display)] text-[clamp(4rem,14vw,12rem)] leading-[0.82] tracking-[-0.055em] text-[var(--home-ink)]">
          Page not found.
        </h1>
        <p
          className={cn(
            'mt-8 max-w-xl text-[var(--home-muted)]',
            editorialType.body
          )}
        >
          The address may have moved, or the page no longer exists.
        </p>
        <Link
          href="/"
          className={cn(
            'mt-10 inline-flex min-h-11 w-fit items-center gap-3 border border-[var(--home-accent)] bg-[var(--home-accent)] px-5 py-3 font-[family-name:var(--font-home-mono)] uppercase tracking-[0.12em] text-[var(--home-on-accent)] transition-colors hover:bg-[var(--home-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none',
            editorialType.micro
          )}
        >
          Return home <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </EditorialShell>
  )
}

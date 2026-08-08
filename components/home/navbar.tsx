'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ListIcon } from '@phosphor-icons/react/dist/ssr'
import ThemeToggle from '@/components/home/theme-toggle'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

export type EditorialRoute =
  | 'home'
  | 'projects'
  | 'showcase'
  | 'log'
  | 'not-found'

const homeLinks = [
  { href: '#selected-work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '/showcase', label: 'Showcases' },
  { href: '/log', label: 'Log' },
]

const routeLinks = [
  { href: '/', label: 'Home', route: 'home' },
  { href: '/projects', label: 'Projects', route: 'projects' },
  { href: '/showcase', label: 'Showcases', route: 'showcase' },
  { href: '/log', label: 'Log', route: 'log' },
] as const

function LinkSet({
  links,
  route,
  mobile = false,
  onNavigate,
}: {
  links: typeof homeLinks | typeof routeLinks
  route: EditorialRoute
  mobile?: boolean
  onNavigate?: () => void
}) {
  return (
    <div className={cn(mobile ? 'grid gap-1' : 'flex items-center gap-7')}>
      {links.map((link) => {
        const active = 'route' in link && link.route === route
        const className = cn(
          editorialType.micro,
          mobile
            ? 'flex min-h-11 items-center border-b border-[var(--home-line)] px-3 font-[family-name:var(--font-home-mono)] tracking-[0.08em] uppercase last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--home-accent)]'
            : 'relative inline-flex min-h-11 items-center font-[family-name:var(--font-home-mono)] tracking-[0.08em] uppercase transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--home-accent)] after:transition-transform after:duration-200 hover:text-[var(--home-ink)] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none after:motion-reduce:transition-none',
          active ? 'text-[var(--home-accent)]' : 'text-[var(--home-muted)]'
        )

        if (link.href.startsWith('#')) {
          return (
            <a
              key={link.href}
              href={link.href}
              className={className}
              onClick={onNavigate}
            >
              {link.label}
            </a>
          )
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            className={className}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}

export default function Navbar({ route = 'home' }: { route?: EditorialRoute }) {
  const isHome = route === 'home'
  const links = isHome ? homeLinks : routeLinks
  const mobileDetailsRef = useRef<HTMLDetailsElement>(null)

  return (
    <header className="pointer-events-none fixed inset-x-4 top-4 z-60 flex justify-center max-md:inset-x-3 max-md:top-3">
      <nav
        className="pointer-events-auto grid min-h-15 w-full max-w-[96rem] grid-cols-[auto_1fr_auto] items-center border border-[var(--home-line)] bg-[color-mix(in_srgb,var(--home-canvas)_92%,transparent)] py-0 pr-3 pl-5 shadow-[0_12px_48px_var(--home-shadow)] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 max-md:grid-cols-[auto_1fr] max-md:pl-4 motion-reduce:transition-none"
        aria-label="Primary navigation"
      >
        {isHome ? (
          <a
            className="inline-flex min-h-11 items-center font-[family-name:var(--font-home-display)] text-base tracking-[-0.05em] text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] xl:text-lg"
            href="#top"
            aria-label="Katsuotz home"
          >
            K<span className="text-[var(--home-accent)]">/</span>O
          </a>
        ) : (
          <Link
            className="inline-flex min-h-11 items-center font-[family-name:var(--font-home-display)] text-base tracking-[-0.05em] text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] xl:text-lg"
            href="/"
            aria-label="Katsuotz home"
          >
            K<span className="text-[var(--home-accent)]">/</span>O
          </Link>
        )}

        <div className="flex justify-center max-md:hidden">
          <LinkSet links={links} route={route} />
        </div>

        <div className="flex items-center gap-2 max-md:justify-self-end">
          <details
            ref={mobileDetailsRef}
            className="relative hidden max-md:block"
          >
            <summary
              aria-label="Primary navigation"
              className="grid size-11 cursor-pointer list-none place-items-center border border-[var(--home-line)] text-[var(--home-muted)] transition-[color,background-color,border-color] duration-200 hover:border-[var(--home-accent)] hover:bg-[var(--home-surface)] hover:text-[var(--home-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-accent)] [&::-webkit-details-marker]:hidden motion-reduce:transition-none"
            >
              <ListIcon className="size-4" aria-hidden="true" />
            </summary>
            <div className="absolute top-[calc(100%+0.75rem)] right-0 grid min-w-56 border border-[var(--home-line)] bg-[var(--home-canvas)] p-2 shadow-[0_18px_40px_var(--home-shadow)]">
              <LinkSet
                links={links}
                route={route}
                mobile
                onNavigate={() =>
                  mobileDetailsRef.current?.removeAttribute('open')
                }
              />
            </div>
          </details>
          <a
            className={cn(
              editorialType.micro,
              'rounded-[0.45rem] flex min-h-11 items-center gap-4 border border-[var(--home-line)] px-4 font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase transition-colors duration-200 hover:border-[var(--home-accent)] hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none max-[420px]:hidden'
            )}
            href="mailto:m.irfan.fakhri66@gmail.com"
          >
            Let&apos;s talk <span className="text-[var(--home-accent)]">↗</span>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

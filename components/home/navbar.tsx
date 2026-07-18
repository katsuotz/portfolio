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

export default function Navbar({ route = 'home' }: { route?: EditorialRoute }) {
  const isHome = route === 'home'
  const links = isHome ? homeLinks : routeLinks

  return (
    <header className="pointer-events-none fixed inset-x-4 top-4 z-60 flex justify-center max-md:inset-x-3 max-md:top-3">
      <nav
        className="pointer-events-auto grid min-h-15 w-full max-w-[90rem] grid-cols-[auto_1fr_auto] items-center border border-[var(--home-line)] bg-[var(--home-canvas)] py-0 pr-3 pl-5 shadow-[0_12px_48px_var(--home-shadow)] transition-[background-color,border-color,box-shadow] duration-200 max-md:grid-cols-[auto_1fr] max-md:pl-4 motion-reduce:transition-none"
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

        <div className="flex justify-center gap-[clamp(1.25rem,4vw,3.5rem)] max-md:hidden">
          {links.map((link) => {
            const className = cn(
              editorialType.micro,
              'relative inline-flex min-h-11 items-center font-[family-name:var(--font-home-mono)] tracking-[0.08em] uppercase transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--home-accent)] after:transition-transform after:duration-200 hover:text-[var(--home-ink)] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none after:motion-reduce:transition-none',
              'route' in link && link.route === route
                ? 'text-[var(--home-accent)]'
                : 'text-[var(--home-muted)]'
            )

            if (link.href.startsWith('#')) {
              return (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  'route' in link && link.route === route ? 'page' : undefined
                }
                className={className}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2 max-md:justify-self-end">
          <details className="relative hidden max-md:block">
            <summary
              aria-label="Primary navigation"
              className="grid size-11 cursor-pointer list-none place-items-center border border-[var(--home-line)] text-[var(--home-muted)] transition-[color,background-color,border-color] duration-200 hover:border-[var(--home-accent)] hover:bg-[var(--home-surface)] hover:text-[var(--home-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-accent)] [&::-webkit-details-marker]:hidden motion-reduce:transition-none"
            >
              <ListIcon className="size-4" aria-hidden="true" />
            </summary>
            <div className="absolute top-[calc(100%+0.75rem)] right-0 grid min-w-56 gap-1 border border-[var(--home-line)] bg-[var(--home-canvas)] p-2 shadow-[0_18px_40px_var(--home-shadow)]">
              {links.map((link) => {
                const className = cn(
                  editorialType.micro,
                  'flex min-h-11 items-center border-b border-[var(--home-line)] px-3 font-[family-name:var(--font-home-mono)] tracking-[0.08em] uppercase last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--home-accent)]',
                  'route' in link && link.route === route
                    ? 'text-[var(--home-accent)]'
                    : 'text-[var(--home-muted)]'
                )

                if (link.href.startsWith('#')) {
                  return (
                    <a key={link.href} href={link.href} className={className}>
                      {link.label}
                    </a>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={
                      'route' in link && link.route === route
                        ? 'page'
                        : undefined
                    }
                    className={className}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </details>
          <a
            className={cn(
              editorialType.micro,
              'flex min-h-11 items-center gap-6 rounded-[0.45rem] border border-[var(--home-line)] px-4 font-[family-name:var(--font-home-mono)] tracking-[0.08em] text-[var(--home-muted)] uppercase transition-colors duration-200 hover:text-[var(--home-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none'
            )}
            href="mailto:m.irfan.fakhri66@gmail.com"
          >
            Let&apos;s talk
            <span
              className="text-base text-[var(--home-accent)]"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

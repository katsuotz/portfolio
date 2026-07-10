import type { ReactNode } from 'react'
import { editorialFontVariables } from '@/lib/editorial-fonts'
import BackToTop from '@/components/home/back-to-top'
import Footer from '@/components/home/footer'
import Navbar, { type EditorialRoute } from '@/components/home/navbar'
import { cn } from '@/lib/utils'
import { editorialType } from '@/lib/editorial-typography'

type EditorialShellProps = {
  children: ReactNode
  route: EditorialRoute
  showBackToTop?: boolean
}

export default function EditorialShell({
  children,
  route,
  showBackToTop = false,
}: EditorialShellProps) {
  return (
    <div
      id="top"
      className={`${editorialFontVariables} home-editorial min-h-screen overflow-clip bg-[var(--home-canvas)] font-[family-name:var(--font-home-sans)] text-[var(--home-ink)] transition-[background-color,color] duration-200 selection:bg-[var(--home-accent)] selection:text-[var(--home-on-accent)] motion-reduce:transition-none`}
    >
      <a
        className={cn(
          'fixed top-3 left-3 z-100 -translate-y-[180%] bg-[var(--home-ink)] px-4 py-3 font-[family-name:var(--font-home-mono)] text-[var(--home-on-accent)] uppercase focus:translate-y-0 focus:outline-2 focus:outline-offset-4 focus:outline-[var(--home-accent)]',
          editorialType.micro
        )}
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar route={route} />
      <main id="main-content">{children}</main>
      {showBackToTop && <BackToTop variant="editorial" />}
      <Footer variant="editorial" />
    </div>
  )
}

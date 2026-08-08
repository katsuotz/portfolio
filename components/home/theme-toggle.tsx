'use client'

import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react'
import { useSiteTheme } from '@/hooks/use-site-theme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useSiteTheme()

  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-[0.45rem] border border-[var(--home-line)] text-[var(--home-muted)] transition-[color,background-color,border-color,transform] duration-200 hover:border-[var(--home-accent)] hover:text-[var(--home-accent)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-accent)] motion-reduce:transition-none"
    >
      {theme === null ? (
        <span className="size-4" aria-hidden="true" />
      ) : isDark ? (
        <SunIcon className="size-4" weight="regular" aria-hidden="true" />
      ) : (
        <MoonStarsIcon className="size-4" weight="regular" aria-hidden="true" />
      )}
    </button>
  )
}

'use client'

import { MoonStarsIcon, SunIcon } from '@phosphor-icons/react'
import { useSiteTheme } from '@/hooks/use-site-theme'

export default function ToggleDarkMode() {
  const { theme, toggleTheme } = useSiteTheme()
  const isDarkMode = theme === 'dark'
  const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <div className="absolute top-0 right-0 z-20 pt-6 pr-6">
      <button
        type="button"
        aria-label={label}
        title={label}
        className="glass-card-enhanced group cursor-pointer rounded-full p-3 transition-all duration-300 hover:border-amber-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:hover:border-blue-400/30"
        onClick={toggleTheme}
      >
        {theme === null ? (
          <span className="block size-5" aria-hidden="true" />
        ) : isDarkMode ? (
          <SunIcon
            className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors"
            weight="light"
          />
        ) : (
          <MoonStarsIcon
            className="w-5 h-5 text-slate-600 group-hover:text-blue-500 transition-colors"
            weight="light"
          />
        )}
      </button>
    </div>
  )
}

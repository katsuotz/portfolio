'use client'

import { useEffect, useRef, useState } from 'react'
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  SYSTEM_THEME_QUERY,
  THEME_STORAGE_KEY,
  type ResolvedSiteTheme,
} from '@/lib/site-theme'

export function useSiteTheme() {
  const [theme, setTheme] = useState<ResolvedSiteTheme | null>(null)
  const hasManualOverride = useRef(false)

  useEffect(() => {
    const storedTheme = getStoredTheme()
    const initialTheme = storedTheme ?? getSystemTheme()

    hasManualOverride.current = storedTheme !== null
    applyTheme(initialTheme)
    setTheme(initialTheme)

    const mediaQuery = window.matchMedia(SYSTEM_THEME_QUERY)
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (hasManualOverride.current) return

      const nextTheme = event.matches ? 'dark' : 'light'
      applyTheme(nextTheme)
      setTheme(nextTheme)
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const toggleTheme = () => {
    const currentTheme = theme ?? getSystemTheme()
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

    hasManualOverride.current = true
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  return { theme, toggleTheme }
}

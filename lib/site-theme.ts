export type ResolvedSiteTheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'home-theme'
export const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)'

export function getSystemTheme(): ResolvedSiteTheme {
  return window.matchMedia(SYSTEM_THEME_QUERY).matches ? 'dark' : 'light'
}

export function getStoredTheme(): ResolvedSiteTheme | null {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null
}

export function applyTheme(theme: ResolvedSiteTheme) {
  const root = document.documentElement

  root.dataset.homeTheme = theme
  root.classList.toggle('dark', theme === 'dark')
  root
    .querySelector<HTMLLinkElement>('#theme-favicon')
    ?.setAttribute(
      'href',
      theme === 'dark' ? '/favicon-dark.svg?v=2' : '/favicon-light.svg?v=2'
    )
}

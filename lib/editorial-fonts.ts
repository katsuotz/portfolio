import { Geist, IBM_Plex_Mono } from 'next/font/google'

const display = Geist({
  subsets: ['latin'],
  variable: '--font-home-display',
  display: 'swap',
})

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-home-sans',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-home-mono',
  display: 'swap',
})

export const editorialFontVariables = `${display.variable} ${sans.variable} ${mono.variable}`

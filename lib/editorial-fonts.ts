import { Archivo_Black, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

const display = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-home-display',
  display: 'swap',
})

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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

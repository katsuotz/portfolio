import '@/app/globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

import Script from 'next/script'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muhammad Irfan Fakhri - Software Engineer | Katsuotz',
  description:
    'Experienced full-stack developer with over 5 years of industry expertise, actively engaged in startups and freelancing on side projects.',
  keywords:
    'web design, web, web apps, html, css, js, ts, node.js, next, vue, react, go, golang, php, laravel, mongodb, sql, mysql, postgre',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={outfit.className}>
        <main className="relative">{children}</main>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-E8CK2FG8Z2" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-E8CK2FG8Z2');
        `}
        </Script>
      </body>
    </html>
  )
}

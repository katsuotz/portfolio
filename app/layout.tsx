import '@/app/globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const homeThemeInitializer = `
  try {
    const storedTheme = localStorage.getItem('home-theme');
    const homeTheme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    document.documentElement.dataset.homeTheme = homeTheme;
    document.documentElement.classList.toggle('dark', homeTheme === 'dark');
    const favicon = document.getElementById('theme-favicon');
    if (favicon) favicon.setAttribute('href', homeTheme === 'dark' ? '/favicon-dark.svg?v=3' : '/favicon-light.svg?v=3');
  } catch {
    document.documentElement.dataset.homeTheme = 'light';
    document.documentElement.classList.remove('dark');
  }
`

export const metadata: Metadata = {
  metadataBase: new URL('https://katsuotz.com'),
  title: 'Muhammad Irfan Fakhri - Software Engineer | Katsuotz',
  description:
    'Experienced full-stack developer with over 7 years of industry expertise, actively engaged in startups and freelancing on side projects.',
  keywords:
    'web design, web, web apps, html, css, js, ts, node.js, next, vue, react, go, golang, php, laravel, mongodb, sql, mysql, postgre',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Irfan Fakhri - Software Engineer | Katsuotz',
    description:
      'Experienced full-stack developer with over 7 years of industry expertise, actively engaged in startups and freelancing on side projects.',
    url: '/',
    siteName: 'Katsuotz',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/photography/orange-backpacks.webp',
        width: 1920,
        height: 1280,
        alt: 'Orange backpack hikers in a misty forest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Irfan Fakhri - Software Engineer | Katsuotz',
    description:
      'Experienced full-stack developer with over 7 years of industry expertise, actively engaged in startups and freelancing on side projects.',
    images: ['/photography/orange-backpacks.webp'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://katsuotz.com/#website',
      url: 'https://katsuotz.com',
      name: 'Katsuotz',
      inLanguage: 'en',
      publisher: {
        '@id': 'https://katsuotz.com/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://katsuotz.com/#profile',
      url: 'https://katsuotz.com',
      name: 'Muhammad Irfan Fakhri - Software Engineer',
      isPartOf: {
        '@id': 'https://katsuotz.com/#website',
      },
      mainEntity: {
        '@id': 'https://katsuotz.com/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://katsuotz.com/#person',
      name: 'Muhammad Irfan Fakhri',
      alternateName: 'Katsuotz',
      url: 'https://katsuotz.com',
      jobTitle: 'Software Engineer',
      description:
        'Experienced full-stack developer building dependable digital products across AI, logistics, agritech, education, and enterprise software.',
      image: 'https://katsuotz.com/photography/portrait.webp',
      knowsAbout: [
        'Full-stack web development',
        'Software engineering',
        'Web performance optimization',
        'AI-powered workflows',
        'React',
        'Next.js',
        'Vue',
        'Go',
        'Node.js',
        'PostgreSQL',
      ],
      sameAs: [
        'https://github.com/katsuotz/',
        'https://www.linkedin.com/in/irfan-fakhri/',
      ],
    },
  ],
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
      lang="en"
    >
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          id="theme-favicon"
          rel="icon"
          type="image/svg+xml"
          href="/favicon-light.svg?v=3"
        />
        <script
          id="home-theme-initializer"
          dangerouslySetInnerHTML={{ __html: homeThemeInitializer }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-[var(--color-accent)]/30">
        <div className="relative">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E8CK2FG8Z2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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

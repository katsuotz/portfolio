import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Showcase | Katsuotz',
  description:
    'A collection of interactive projects and creative coding experiments built from scratch by Muhammad Irfan Fakhri.',
  keywords:
    'web design, web, web apps, html, css, js, ts, node.js, next, vue, react, go, golang, php, laravel, mongodb, sql, mysql, postgre',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
  alternates: {
    canonical: '/showcase',
  },
  openGraph: {
    url: '/showcase',
    type: 'website',
    images: [
      {
        url: '/code/middle-space.jpg',
        alt: 'Middle Space mobile web game showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Showcase | Katsuotz',
    description:
      'A collection of interactive projects and creative coding experiments built from scratch by Muhammad Irfan Fakhri.',
    images: ['/code/middle-space.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

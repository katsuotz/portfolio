import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Katsuotz',
  description:
    'A selection of products, platforms, and experiments by Muhammad Irfan Fakhri spanning AI, operations, education, logistics, and the public sector.',
  keywords:
    'web design, web, web apps, html, css, js, ts, node.js, next, vue, react, go, golang, php, laravel, mongodb, sql, mysql, postgre',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    url: '/projects',
    type: 'website',
    images: [
      {
        url: '/project/ppdb-1.webp',
        alt: 'PPDB Jawa Barat project interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Katsuotz',
    description:
      'A selection of products, platforms, and experiments by Muhammad Irfan Fakhri spanning AI, operations, education, logistics, and the public sector.',
    images: ['/project/ppdb-1.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

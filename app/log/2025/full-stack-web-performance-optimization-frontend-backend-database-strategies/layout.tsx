import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full-Stack Web Performance Optimization | Katsuotz',
  description:
    'How we optimized a large-scale web application (SPMB Jawa Barat 2025) across the frontend, backend, and database layers. Covers Vue.js, Golang, PostgreSQL, Redis, Varnish, and more.',
  keywords:
    'web performance, frontend optimization, backend optimization, database tuning, Golang, Vue.js, PostgreSQL, Redis, PgBouncer, Varnish, Cloudflare, full-stack development, high traffic website, performance engineering',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
  alternates: {
    canonical:
      '/log/2025/full-stack-web-performance-optimization-frontend-backend-database-strategies',
  },
  openGraph: {
    url: '/log/2025/full-stack-web-performance-optimization-frontend-backend-database-strategies',
    type: 'article',
    images: ['/log/spmb-jabar/google-analytics.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Web Performance Optimization | Katsuotz',
    description:
      'How we optimized a large-scale web application across the frontend, backend, and database layers using Vue.js, Golang, PostgreSQL, Redis, Varnish, and Cloudflare.',
    images: ['/log/spmb-jabar/google-analytics.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

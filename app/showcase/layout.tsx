import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Showcase | Katsuotz',
  description:
    'Experienced full-stack developer with over 5 years of industry expertise, actively engaged in startups and freelancing on side projects.',
  keywords:
    'web design, web, web apps, html, css, js, ts, node.js, next, vue, react, go, golang, php, laravel, mongodb, sql, mysql, postgre',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

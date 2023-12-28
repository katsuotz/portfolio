import '@/app/globals.css'
import {Outfit} from 'next/font/google'

const outfit = Outfit({subsets: ['latin']})

export const metadata = {
  title: 'Irfan Fakhri - Software Engineer | Katsuotz',
  description: 'Experienced full-stack developer with over 5 years of industry expertise, actively engaged in startups and freelancing on side projects.',
  author: 'Irfan Fakhri',
  keywords: 'web design, web, web apps, html, css, js, ts, node.js, next, vue, react, go, golang, php, laravel, mongodb, sql, mysql, postgre'
}

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {

  return (
    <html lang="en">
    <head>
      <title>{metadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={metadata.description}/>
      <meta name="keywords" content={metadata.keywords}/>
      <meta name="author" content={metadata.author}/>
    </head>
    <body className={outfit.className}>
    <main className="relative">
      {children}
    </main>
    </body>
    </html>
  )
}

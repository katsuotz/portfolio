import type { Metadata } from 'next'
import ArticleStructuredData from '@/components/seo/article-structured-data'

export const metadata: Metadata = {
  title: '2 Weeks in New Zealand | Katsuotz',
  description:
    "A two-week campervan road trip through New Zealand's South Island, documented by Muhammad Irfan Fakhri.",
  keywords:
    'new zealand, campervan, travelling, traveling, backpacking, road trip, south island',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
  alternates: {
    canonical: '/log/2024/2-weeks-in-new-zealand',
  },
  openGraph: {
    url: '/log/2024/2-weeks-in-new-zealand',
    type: 'article',
    images: ['/log/new-zealand/countryside.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2 Weeks in New Zealand | Katsuotz',
    description:
      "A two-week campervan road trip through New Zealand's South Island, documented by Muhammad Irfan Fakhri.",
    images: ['/log/new-zealand/countryside.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleStructuredData
        headline="Exploring New Zealand's South Island in 2 Weeks"
        description="A two-week campervan road trip through New Zealand's South Island, documented by Muhammad Irfan Fakhri."
        url="https://katsuotz.com/log/2024/2-weeks-in-new-zealand"
        datePublished="2024-11-30"
        image="/log/new-zealand/countryside.jpg"
        articleSection="Travel"
        keywords={[
          'New Zealand',
          'South Island',
          'campervan road trip',
          'travel photography',
        ]}
      />
      {children}
    </>
  )
}

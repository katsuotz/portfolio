import type { Metadata } from 'next'
import ArticleStructuredData from '@/components/seo/article-structured-data'

export const metadata: Metadata = {
  title: 'ESL One Kuala Lumpur 2023 | Katsuotz',
  description:
    'A photo journal from attending ESL One Kuala Lumpur 2023 in Malaysia.',
  keywords:
    'esl, esl one, esl one kl, esl one kuala lumpur, kuala lumpur, malaysia, dota, dota 2',
  authors: [{ name: 'Muhammad Irfan Fakhri' }, { name: 'Katsuotz' }],
  alternates: {
    canonical: '/log/2023/esl-one-kuala-lumpur',
  },
  openGraph: {
    url: '/log/2023/esl-one-kuala-lumpur',
    type: 'article',
    images: ['/log/kuala-lumpur/arte-mitec.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESL One Kuala Lumpur 2023 | Katsuotz',
    description:
      'A photo journal from attending ESL One Kuala Lumpur 2023 in Malaysia.',
    images: ['/log/kuala-lumpur/arte-mitec.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleStructuredData
        headline="ESL One Kuala Lumpur Experience"
        description="A photo journal from attending ESL One Kuala Lumpur 2023 in Malaysia."
        url="https://katsuotz.com/log/2023/esl-one-kuala-lumpur"
        datePublished="2023-12-17"
        image="/log/kuala-lumpur/arte-mitec.jpg"
        articleSection="Travel and esports"
        keywords={[
          'ESL One Kuala Lumpur',
          'Dota 2',
          'Kuala Lumpur',
          'Malaysia',
        ]}
      />
      {children}
    </>
  )
}

type ArticleStructuredDataProps = {
  headline: string
  description: string
  url: string
  datePublished: string
  image: string
  articleSection: string
  keywords: string[]
}

const siteUrl = 'https://katsuotz.com'

export default function ArticleStructuredData({
  headline,
  description,
  url,
  datePublished,
  image,
  articleSection,
  keywords,
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
    },
    image: `${siteUrl}${image}`,
    datePublished,
    author: {
      '@id': `${siteUrl}/#person`,
    },
    publisher: {
      '@id': `${siteUrl}/#person`,
    },
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    articleSection,
    keywords,
    inLanguage: 'en',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

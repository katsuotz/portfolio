import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://katsuotz.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/projects',
    '/showcase',
    '/photography',
    '/log',
    '/log/2025/full-stack-web-performance-optimization-frontend-backend-database-strategies',
    '/log/2024/2-weeks-in-new-zealand',
    '/log/2023/esl-one-kuala-lumpur',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
  }))
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: { unoptimized: true },
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig

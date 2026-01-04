/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,

  images: {
    unoptimized: true,
  },

  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true,
  },

  turbopack: {},
}

module.exports = nextConfig

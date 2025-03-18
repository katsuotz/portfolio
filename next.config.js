/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  eslint: {
      ignoreDuringBuilds: true
  }
}

module.exports = nextConfig

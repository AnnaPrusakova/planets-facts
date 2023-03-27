/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://planets-facts-sigma.vercel.app',
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/planets/mercury',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

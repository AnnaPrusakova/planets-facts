/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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

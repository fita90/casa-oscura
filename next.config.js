/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'barossadistilling.com',
      },
      {
        protocol: 'https',
        hostname: 'www.foodandwine.com',
      },
    ],
  },
}

module.exports = nextConfig

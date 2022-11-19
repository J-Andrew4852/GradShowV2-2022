/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        // port: '',
        // pathname: '',
      },
    ],
  },
}

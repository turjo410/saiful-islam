/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/saiful-islam',
  assetPrefix: '/saiful-islam/',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'github.com'],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

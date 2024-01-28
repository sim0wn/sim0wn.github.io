/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '' : undefined,
  // },
  images: {
    unoptimized: true,
  },
  // experimental: {
  // appDir: true,
  output: 'export',
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })
    return config
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? '/ntk-product-website' : '',
  assetPrefix: isProd ? '/ntk-product-website' : '',
}
module.exports = nextConfig

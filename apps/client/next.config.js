/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withNextIntl({
    reactStrictMode: true,
    transpilePackages: ['ui'],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'develop.ostigan.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'api.ostigan.com',
          port: '',
          pathname: '/public/**',
        },
      ],
    },
    env: {
      BASE_URL: 'https://develop.ostigan.com/api',
    },
  }),
)
// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ["ui"],
//   experimental: {
//     serverActions: true,
//     allowFutureImage: true, //add style or classes directly to the image components.
//   },
//   images: {
//     disableStaticImages: true,
//   },

//   env: {
//     BASE_URL: "http://172.21.21.73/api/v1",
//   },
//   swcMinify: true,
//   modularizeImports: {
//     "@mui/material": {
//       transform: "@mui/material/{{member}}",
//     },
//     "@mui/icons-material": {
//       transform: "@mui/icons-material/{{member}}",
//     },
//     "@mui/styles": {
//       transform: "@mui/styles/{{member}}",
//     },
//     "@mui/lab": {
//       transform: "@mui/lab/{{member}}",
//     },
//   },
// }

// module.exports = nextConfig

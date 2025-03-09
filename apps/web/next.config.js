module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'prettier'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'develop.ostigan.com',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
  env: {
    BASE_URL: 'https://develop.ostigan.com/api/v1/',
  },
}

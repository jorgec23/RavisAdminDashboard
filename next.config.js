/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images:{
    remotePatterns: [
      {
        protocol:'https',
        hostname:'vwraviswecsgroup187.blob.core.windwos.net/'
      }
    ]
  },

}

module.exports = nextConfig

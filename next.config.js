/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
//menghilangkan loading next js
const devIndicators = {
  buildActivity: false,
}
module.exports = nextConfig, devIndicators

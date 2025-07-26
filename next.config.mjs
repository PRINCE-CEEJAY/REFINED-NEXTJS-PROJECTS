/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
module.exports = {
  swcMinify: true,
  // disable react strict mode if not debugging
  reactStrictMode: false,

  // don't lint during build (use a separate script instead)
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true, // temporarily to speed up
  },
};

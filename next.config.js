/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.themealdb.com", "templatemo.com"],
  },
};

module.exports = nextConfig;

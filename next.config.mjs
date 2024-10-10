/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['statics.cdn.200lab.io', 'github.com', 'fakestoreapi.com'],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
    ];
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- THIS enables `next export`
  images: {
    unoptimized: true, // Required if you use next/image in static export
  },
  trailingSlash: true, // Optional: helps ensure all links resolve
};

module.exports = nextConfig;

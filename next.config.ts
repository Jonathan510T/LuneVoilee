// next.config.js
/** @type {import('next').NextConfig} */

const repo = 'LuneVoilee'; 

const nextConfig = {
  output: 'export', 


  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true, 
  },

  trailingSlash: true, 
};

module.exports = nextConfig;

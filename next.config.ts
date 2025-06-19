/** @type {import('next').NextConfig} */

// ———— customise this if the repo name changes ————
const repoName = 'LuneVoilee';

// Helpers
const isProd = process.env.NODE_ENV === 'production';
const prefix  = isProd ? `/${repoName}` : '';

const nextConfig = {

  output: 'export',


  basePath: prefix,          // e.g. "/LuneVoilee" in production
  assetPrefix: prefix + '/', // add trailing slash or "" in dev

  reactStrictMode: true,

 
  //     export mode can’t run the sharp optimizer at runtime.
  images: {
    unoptimized: true,
  },

  //     experimental, plugin, or future settings.
  // experimental: {},
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const repoName = 'LuneVoilee';
const isProd   = process.env.NODE_ENV === 'production';
const prefix   = isProd ? `/${repoName}` : '';

module.exports = {
  output:      'export',
  basePath:    prefix,        // → "/LuneVoilee" on GitHub Pages
  reactStrictMode: true,
  images: { unoptimized: true }
};

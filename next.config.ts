/** @type {import('next').NextConfig} */

/* ─── customise this if the repo name changes ───────────────────────── */
const repoName = 'LuneVoilee';

/* Helpers */
const isProd  = process.env.NODE_ENV === 'production';
const prefix  = isProd ? `/${repoName}` : '';        // → "/LuneVoilee" in prod, "" in dev

const nextConfig = {
 
  output: 'export',


  basePath: prefix,                    // e.g. "/LuneVoilee"
  assetPrefix: prefix ? `${prefix}/` : '',


  reactStrictMode: true,


  images: { unoptimized: true },


};

module.exports = nextConfig;

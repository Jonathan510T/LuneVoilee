const repo   = 'LuneVoilee';
const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
module.exports = {
  output:  'export',
  basePath: prefix,
  // next.config.ts
  env: { NEXT_PUBLIC_BASE_PATH: '/LuneVoilee' },

  images:  { unoptimized: true },
};

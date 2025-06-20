const repo   = 'LuneVoilee';
const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
module.exports = {
  output:  'export',
  basePath: prefix,
  // 👇 make it available in the browser
  env:     { NEXT_PUBLIC_BASE_PATH: prefix },
  images:  { unoptimized: true },
};

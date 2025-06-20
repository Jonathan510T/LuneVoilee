const repo   = 'LuneVoilee';
const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? `/${repo}` : '';

/** @type {import("next").NextConfig} */
module.exports = {
  output:   'export',
  basePath: prefix,
  images:   { unoptimized: true },
  env: {                         // 👈 add this
    NEXT_PUBLIC_BASE_PATH: prefix,
  },
};

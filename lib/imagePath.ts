// lib/imagePath.ts
export const imagePath = (s: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH}${s.startsWith('/') ? '' : '/'}${s.replace(/^\/+/, '')}`;

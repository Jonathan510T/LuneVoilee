const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''; 

export function imagePath(src: string): string {
  const cleaned = src.startsWith('/') ? src : `/${src}`;
  return BASE && !cleaned.startsWith(`${BASE}/`)
    ? `${BASE}${cleaned}`
    : cleaned;
}

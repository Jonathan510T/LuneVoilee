// lib/imagePath.ts
export function imagePath(src: string) {
  // remove any accidental leading slashes, then add one
  return '/' + src.replace(/^\/+/, '');
}

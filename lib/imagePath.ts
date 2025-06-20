/** Turn "images/IMG_6502.jpg" → "/LuneVoilee/images/IMG_6502.jpg" */
export const imagePath = (src: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH}${src.startsWith('/') ? '' : '/'}${src}`;

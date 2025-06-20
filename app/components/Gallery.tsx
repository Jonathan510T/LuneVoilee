// app/components/Gallery.tsx
'use client';

import { useState } from 'react';
import Image        from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // npm i lucide-react

type Props = { images: string[] };

export default function Gallery({ images }: Props) {
  const [open,  setOpen]  = useState(false);
  const [index, setIndex] = useState(0);

  const show = (i: number) => { setIndex(i); setOpen(true); };
  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  return (
    <>
      {/* thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => show(i)}
            className="relative w-full aspect-square overflow-hidden"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width:1024px) 20vw, (min-width:768px) 25vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {/* light-box */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <Image
            src={images[index]}
            alt=""
            fill
            priority
            className="object-contain"
          />

          {/* close */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-6 left-6 text-white/80 hover:text-white"
          >
            <X size={36} />
          </button>

          {/* nav */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-10">
            <button
              onClick={prev}
              aria-label="Previous"
              className="bg-white rounded-full p-3 hover:bg-yellow-400 transition text-black"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="bg-white rounded-full p-3 hover:bg-yellow-400 transition text-black"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

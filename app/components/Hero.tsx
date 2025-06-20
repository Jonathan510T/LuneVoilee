'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link  from 'next/link';

export default function Hero() {
  const heroImages = [
    '/images/hero/DSC_1965.JPG',
    '/images/hero/DSC_2022.JPG',
    '/images/hero/DSC_2025.JPG',
    '/images/hero/DSC_2029.JPG',
    '/images/hero/DSC_2034.JPG',
    '/images/hero/DSC_2052.JPG',
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {heroImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Hero slide"
          fill
          priority={i === 0}
          sizes="100vw"
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Brand New Collection
        </h1>
        <p className="text-white text-xl sm:text-2xl mb-8">Spring-Summer 2026</p>
        <Link
          href="/products"
          className="bg-black text-white text-lg px-6 py-3 rounded-md transition-colors duration-500 hover:bg-yellow-500 hover:text-black"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}

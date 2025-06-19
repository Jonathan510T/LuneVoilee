'use client';

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  // Images located in /public/images/hero
  const heroImages = [
    'images/hero/DSC_1965.JPG',
    'images/hero/DSC_2022.JPG',
    'images/hero/DSC_2025.JPG',
    'images/hero/DSC_2029.JPG',
    'images/hero/DSC_2034.JPG',
    'images/hero/DSC_2052.JPG',
  ];

  const [current, setCurrent] = useState(0);

  // Cycle through images every 5 s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section with Slideshow Background */}
      <section className="relative w-full h-screen overflow-hidden">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Hero slide"
            fill
            priority={i === 0}
            sizes="100vw"
            className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Copy */}
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

      {/* Category Tiles Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Best Sellers */}
          <div className="relative overflow-hidden group h-[38.4rem]">
            <Image
              src="images/IMG_6502.jpg"
              alt="Best Sellers"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-3xl font-semibold mb-4">Best Sellers</h3>
              <Link
                href="/products/best-sellers"
                className="bg-black text-white text-lg px-6 py-3 rounded transition-colors duration-500 hover:bg-yellow-500 hover:text-black"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Hoodies */}
          <div className="relative overflow-hidden group h-[38.4rem]">
            <Image
              src="images/IMG_6503.jpg"
              alt="Hoodies"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-3xl font-semibold mb-4">Hoodies</h3>
              <Link
                href="/products/hoodies"
                className="bg-black text-white text-lg px-6 py-3 rounded transition-colors duration-500 hover:bg-yellow-500 hover:text-black"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Shirts */}
          <div className="relative overflow-hidden group h-[38.4rem]">
            <Image
              src="images/IMG_6504.jpg"
              alt="Shirts"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-3xl font-semibold mb-4">Shirts</h3>
              <Link
                href="/products/shirts"
                className="bg-black text-white text-lg px-6 py-3 rounded transition-colors duration-500 hover:bg-yellow-500 hover:text-black"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
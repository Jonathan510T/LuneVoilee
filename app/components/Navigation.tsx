// app/components/Navigation.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import 'boxicons/css/boxicons.min.css';
import { useCart } from '@/app/context/CartContext';
import { categories } from '@/app/data/products';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { openCart } = useCart();

  /* close dropdown when clicking outside */
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const menuCategories = categories.filter(c => c.slug !== 'pants');

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      {/* announcement bar */}
      <div className="text-center text-[#D4AF37] py-2 text-sm sm:text-base">
        Due to high demand, checkout times may be delayed
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#F5F3EF] flex items-center justify-center">
            <span className="font-bold leading-none">
              <span className="text-[#F5F3EF]">L</span>
              <span className="text-[#D4AF37]">V</span>
            </span>
          </div>
        </Link>

        {/* brand text - centred for >=sm */}
        <Link
          href="/"
          className="
            hidden sm:block absolute left-1/2 -translate-x-1/2
            uppercase tracking-widest border-b border-[#F5F3EF]
            text-lg md:text-xl lg:text-2xl whitespace-nowrap
          "
        >
          Lune&nbsp;Voilee
        </Link>

        {/* right-hand controls */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-lg sm:text-xl">
          {/* products dropdown */}
          <div ref={ref} className="relative">
            <button
              onClick={() => setOpen(o => !o)}
              className="flex items-center space-x-1 sm:space-x-2"
            >
              <span>Products</span>
              <i
                className={`
                  bx transition-transform duration-200
                  ${open ? 'bx-chevron-up' : 'bx-chevron-down'}
                `}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-48 sm:w-56 bg-[#1C1C1E] text-[#F5F3EF] rounded-md shadow-lg border border-white/10 text-base sm:text-lg">
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-[#D4AF37]/10 uppercase tracking-wide"
                >
                  All Products
                </Link>
                {menuCategories.map(c => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 hover:bg-[#D4AF37]/10 uppercase tracking-wide"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* cart icon */}
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="hover:text-white/70"
          >
            <i className="bx bx-cart" />
          </button>
        </div>
      </div>
    </nav>
  );
}

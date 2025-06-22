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
    <nav className="fixed inset-x-0 top-0 z-50 text-2xl text-[#F5F3EF] bg-transparent">
      {/* announcement bar */}
      <div className="text-center text-[#D4AF37] py-3 bg-[#1C1C1E] text-xl">
        Due to high demand, checkout times may be delayed
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 py-5">
        {/* logo */}
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#F5F3EF] flex items-center justify-center">
            <span className="font-bold">
              <span className="text-[#F5F3EF]">L</span>
              <span className="text-[#D4AF37]">V</span>
            </span>
          </div>
        </Link>

        {/* brand text */}
        <div className="text-center">
          <Link
            href="/"
            className="uppercase tracking-widest border-b-2 border-[#F5F3EF]"
          >
            Lune Voilee
          </Link>
        </div>

        {/* right-hand controls */}
        <div className="flex justify-end items-center space-x-6">
          {/* products dropdown */}
          <div ref={ref} className="relative">
            <button
              onClick={() => setOpen(o => !o)}
              className="flex items-center space-x-2"
            >
              <span>Products</span>
              {/* icons inherit text-2xl from parent */}
              <i className={`bx transition-transform ${open ? 'bx-chevron-up' : 'bx-chevron-down'}`} />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-[#1C1C1E] text-[#F5F3EF] rounded-md shadow-lg border border-white/10 text-2xl">
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 hover:bg-[#D4AF37]/10 uppercase tracking-wide"
                >
                  All Products
                </Link>
                {menuCategories.map(c => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3 hover:bg-[#D4AF37]/10 uppercase tracking-wide"
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
            <i className="bx bx-cart" /> {/* inherits text-2xl */}
          </button>
        </div>
      </div>
    </nav>
  );
}

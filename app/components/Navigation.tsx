// app/components/Navigation.tsx
'use client'

import React, { FC, useState, useRef, useEffect } from 'react'
import Link                                       from 'next/link'
import 'boxicons/css/boxicons.min.css'
import { useCart }                                from '@/app/context/CartContext'
import { categories }                             from '@/app/data/products'

const Navigation: FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const dropdownRef                           = useRef<HTMLDivElement>(null)
  const { openCart }                          = useCart()

  /* --- close dropdown when clicking outside --- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /* menu items: first "All Products", then every category except 'pants' */
  const menuCategories = categories.filter(c => c.slug !== 'pants')

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black text-white">
      {/* announcement bar */}
      <div className="text-center text-xs text-yellow-500 py-1">
        Due to high demand, checkout times may be delayed
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 py-3">
        {/* logo */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
            <span className="font-bold text-lg">
              <span className="text-white">L</span>
              <span className="text-yellow-500">V</span>
            </span>
          </div>
        </Link>

        {/* brand text */}
        <div className="text-center">
          <Link
            href="/"
            className="text-white text-sm uppercase tracking-widest border-b-2 border-white"
          >
            Lune Voilee
          </Link>
        </div>

        {/* right controls */}
        <div className="flex justify-end items-center space-x-4">
          {/* products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsProductsOpen(o => !o)}
              className="flex items-center space-x-1"
            >
              <span>Products</span>
              <i
                className={`bx text-lg transition-transform ${
                  isProductsOpen ? 'bx-chevron-up' : 'bx-chevron-down'
                }`}
              />
            </button>

            {isProductsOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-48 bg-black text-white
                  rounded-md shadow-lg border border-white/10
                "
              >
                {/* All products link */}
                <Link
                  href="/products"
                  onClick={() => setIsProductsOpen(false)}
                  className="
                    block px-4 py-2 text-sm hover:bg-white/10
                    transition-colors uppercase tracking-wide
                  "
                >
                  All Products
                </Link>

                {/* categories except pants */}
                {menuCategories.map(c => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    onClick={() => setIsProductsOpen(false)}
                    className="
                      block px-4 py-2 text-sm hover:bg-white/10
                      transition-colors uppercase tracking-wide
                    "
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* cart */}
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="text-white hover:text-white/70"
          >
            <i className="bx bx-cart text-xl" />
          </button>
        </div>
      </div>
    </nav>
  )
}



export default Navigation

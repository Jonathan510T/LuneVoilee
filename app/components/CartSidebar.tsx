// app/components/CartSidebar.tsx
'use client'

import React, { useEffect } from 'react'
import Image               from 'next/image'
import { useCart }         from '@/app/context/CartContext'
import { imagePath } from '@/lib/imagePath';

export default function CartSidebar() {
  const { isOpen, closeCart, items, updateQty, removeItem, total } = useCart()

  // prevent background scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* sidebar */}
      <aside className="fixed right-0 top-0 h-full w-80 bg-white z-50 flex flex-col">
        {/* header */}
        <header className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold uppercase tracking-wider text-black">
            Cart
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-2xl leading-none text-black"
          >
            &times;
          </button>
        </header>

        {/* items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <p className="text-center text-black">Your cart is empty</p>
          ) : (
            items.map(item => (
              <div
                key={`${item.id}-${item.color}-${item.size}`}
                className="flex space-x-4"
              >
                <Image
                  
                  src={imagePath(item.image)} // <-- prepend the single “/” here
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="text-sm uppercase tracking-wider text-black">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-black">
                    ${item.price.toFixed(2)}
                  </p>

                  {item.color && (
                    <p className="text-sm mt-1 text-black">
                      Color: {item.color}
                    </p>
                  )}
                  {item.size && (
                    <p className="text-sm text-black">
                      Size: {item.size}
                    </p>
                  )}

                  {/* qty controls */}
                  <div className="mt-2 inline-flex items-center border border-gray-300">
                    <button
                      onClick={() =>
                        updateQty(item.id, item.quantity - 1, item.color, item.size)
                      }
                      disabled={item.quantity === 1}
                      className="px-3 py-1 text-black"
                    >
                      −
                    </button>
                    <span className="px-4 text-black">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQty(item.id, item.quantity + 1, item.color, item.size)
                      }
                      className="px-3 py-1 text-black"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id, item.color, item.size)}
                    className="ml-4 text-sm underline text-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* footer with Checkout button */}
        <footer className="px-6 py-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-black">Total:</span>
            <span className="font-semibold text-black">
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => {
              /* TODO: navigate to checkout page */
            }}
            className="
              w-full py-3 text-white font-semibold uppercase
              bg-black transition-colors duration-300
              hover:bg-yellow-400 hover:text-black
            "
          >
            Checkout&nbsp;Now
          </button>
        </footer>
      </aside>
    </>
  )
}

// app/(store)/products/[category]/[productId]/ProductDetailClient.tsx
'use client';

import { useState } from 'react';
import Image        from 'next/image';
import { useCart }  from '@/app/context/CartContext';
import type { Product } from '@/app/data/products';
import { imagePath } from '@/lib/imagePath';

type Color = 'green' | 'white' | 'black';

const bgClass: Record<Color, string> = {
  green : 'bg-green-500',
  white : 'bg-white',
  black : 'bg-black',
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();

  const [color, setColor]   = useState<Color>('green');
  const [size,  setSize]    = useState('Medium');
  const [active, setActive] = useState(product.image);  // ⭐ current photo

  const thumbs = [product.image, product.imageback].filter(Boolean);

  const handleAdd = () => {
    addItem({
      id:       product.id,
      name:     product.name,
      price:    product.price,
      image:    active,          // add the viewed side to cart
      quantity: 1,
      color,
      size,
    });
    openCart();
  };

  return (
    <>
      {/* image column ---------------------------------------------------- */}
      <div className="md:flex-1 flex flex-col items-center mb-8 md:mb-0">
        {/* ratio box keeps the image from stretching too tall */}
        <div className="relative w-full max-w-[600px] max-h-[650px] aspect-[3/4]">
          <Image
            src={imagePath(active)}
            alt={product.name}
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover rounded"
          />
        </div>

        {/* two thumbnails */}
        {thumbs.length > 1 && (
          <div className="flex space-x-4 mt-6">
            {thumbs.map(src => (
              <button
                key={src}
                onClick={() => setActive(src)}
                className={`
                  relative w-20 h-20 rounded overflow-hidden
                  ring-2 transition
                  ${active === src ? 'ring-yellow-400' : 'ring-transparent'}
                `}
              >
                <Image
                  src={imagePath(src)}
                  alt="thumbnail"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* details column -------------------------------------------------- */}
      <div className="md:flex-1">
        <h1 className="text-3xl font-semibold uppercase mb-2">{product.name}</h1>
        <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
        <hr className="border-gray-700 mb-6" />

        {/* colour selector */}
        <div className="mb-8">
          <h2 className="uppercase text-sm font-medium mb-2 text-white">
            Color: {color}
          </h2>
          <div className="flex space-x-3">
            {(['green', 'white', 'black'] as Color[]).map(c => (
              <button
                key={c}
                aria-label={c}
                onClick={() => setColor(c)}
                className={`
                  h-8 w-8 rounded-full border-2
                  ${bgClass[c]}
                  ${color === c
                    ? c === 'white' ? 'border-black' : 'border-white'
                    : 'border-gray-600'}
                `}
              />
            ))}
          </div>
        </div>

        {/* size selector */}
        <div className="mb-8">
          <h3 className="uppercase text-sm font-medium mb-2 text-white">Size</h3>
          <select
            value={size}
            onChange={e => setSize(e.target.value)}
            className="w-full bg-transparent border border-gray-600 p-2 text-white"
          >
            {['Small','Medium','Large','X-Large','XX-Large'].map(s => (
              <option key={s} value={s} className="text-black">{s}</option>
            ))}
          </select>
        </div>

        {/* add to cart */}
        <button
          onClick={handleAdd}
          className="
            w-full py-3 bg-white text-black font-semibold uppercase mb-4
            transition-colors duration-300 hover:bg-gray-200
          "
        >
          Add to Cart
        </button>

        {/* description */}
        <div className="mt-10 space-y-6 text-white">
          <div>
            <h3 className="uppercase text-sm font-medium mb-1">Material</h3>
            <p>100% Fleece Cotton</p>
          </div>
          <div>
            <h3 className="uppercase text-sm font-medium mb-1">Fit</h3>
            <p>Loose</p>
          </div>
          <div>
            <h3 className="uppercase text-sm font-medium mb-1">Design</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

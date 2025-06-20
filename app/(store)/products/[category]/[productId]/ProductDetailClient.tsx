// app/(store)/products/[category]/[productId]/ProductDetailClient.tsx
'use client'

import { useState }     from 'react'
import Image            from 'next/image'
import { useCart }      from '@/app/context/CartContext'
import type { Product } from '@/app/data/products'
import { imagePath } from '@/lib/imagePath';

type Color = 'green' | 'white' | 'black'

const bgClassMap: Record<Color, string> = {
  green: 'bg-green-500',
  white: 'bg-white',
  black: 'bg-black',
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem, openCart } = useCart()

  const [color, setColor] = useState<Color>('green')
  const [size,  setSize]  = useState<string>('Medium')

  const handleAdd = () => {
    addItem({
      id:       product.id,
      name:     product.name,
      price:    product.price,
      image:    product.image,
      quantity: 1,
      color,
      size,
    })
    openCart()
  }

  return (
    <>
      {/* image */}
      <div className="md:flex-1 flex justify-center mb-8 md:mb-0">
        {/* product image */}
        <Image
          src={product.image}   // prepended “/”
          alt={product.name}
          width={600}
          height={800}
          className="object-cover rounded"
        />
      </div>


      {/* details */}
      <div className="md:flex-1">
        <h1 className="text-3xl font-semibold uppercase mb-2">
          {product.name}
        </h1>
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
                onClick={() => setColor(c)}
                aria-label={c}
                className={`
                  h-8 w-8 rounded-full border-2
                  ${bgClassMap[c]}
                  ${color === c
                    ? c === 'white'
                      ? 'border-black'
                      : 'border-white'
                    : 'border-gray-600'}
                `}
              />
            ))}
          </div>
        </div>

        {/* size selector */}
        <div className="mb-8">
          <h3 className="uppercase text-sm font-medium mb-2 text-white">
            Size
          </h3>
          <select
            value={size}
            onChange={e => setSize(e.target.value)}
            className="w-full bg-transparent border border-gray-600 p-2 text-white"
          >
            <option value="Small"   className="text-black">Small</option>
            <option value="Medium"  className="text-black">Medium</option>
            <option value="Large"   className="text-black">Large</option>
            <option value="X-Large" className="text-black">X-Large</option>
            <option value="XX-Large" className="text-black">XX-Large</option>
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
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/app/data/products'

interface ProductCardProps {
  product: Product
  categoryColor: string
}

export default function ProductCard({
  product,
  categoryColor,
}: ProductCardProps) {
  return (
    <div className="group block w-full h-[80vh] relative overflow-hidden bg-black">
      {/* Image still links to detail page */}
      <Link href={`/products/${product.category}/${product.id}`}>
        <Image
          
          src={product.image}   // <-- prepend the single “/” here
          alt={product.name}
          fill
          className="object-cover scale-100 transition-transform duration-400 ease-in-out group-hover:scale-110"
        />
      </Link>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-75 transition-opacity duration-400" />
      <div className="absolute bottom-0 left-0 p-4 space-y-2">
        <h3 style={{ color: categoryColor }} className="text-lg font-bold">
          {product.name}
        </h3>
        <p className="text-sm">${product.price.toFixed(2)}</p>

        {/* Buy Now navigates to the product detail page */}
        <Link href={`/products/${product.category}/${product.id}`}>
          <button className="mt-4 px-5 py-2 bg-white text-black font-medium rounded transition-colors duration-300 hover:bg-yellow-500">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  )
}

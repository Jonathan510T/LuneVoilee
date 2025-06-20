'use client'

import Image  from 'next/image'
import Link   from 'next/link'
import type { Product } from '@/app/data/products'
import { imagePath } from '@/lib/imagePath';

type Props = { product: Product; categoryColor: string }

export default function ProductCard({ product, categoryColor }: Props) {
  return (
    <div className="group block w-full h-[80vh] relative overflow-hidden bg-black">
      <Link href={`/products/${product.category}/${product.id}`}>
        <Image
          src={imagePath(product.image)}   // ← prepend ONE “/”
          alt={product.name}
          fill
          className="object-cover transition-transform duration-400 ease-in-out group-hover:scale-110"
        />
      </Link>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-75 transition-opacity duration-400" />

      <div className="absolute bottom-0 left-0 p-4 space-y-2">
        <h3 style={{ color: categoryColor }} className="text-lg font-bold">
          {product.name}
        </h3>
        <p className="text-sm">${product.price.toFixed(2)}</p>

        <Link href={`/products/${product.category}/${product.id}`}>
          <button className="mt-4 px-5 py-2 bg-white text-black font-medium rounded transition-colors duration-300 hover:bg-yellow-500">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  )
}

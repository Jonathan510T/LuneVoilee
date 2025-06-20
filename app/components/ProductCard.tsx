'use client';

import Image  from 'next/image';
import Link   from 'next/link';
import type { Product } from '@/app/data/products';
import { imagePath } from '@/lib/imagePath';

type Props = { product: Product; categoryColor: string };

export default function ProductCard({ product, categoryColor }: Props) {
  return (
    <div className="group relative w-full h-[80vh] overflow-hidden bg-black">

      {/* -------- Clickable image area ---------------------------------- */}
      <Link
        href={`/products/${product.category}/${product.id}`}
        aria-label={product.name}
        className="absolute inset-0"
      >
        {/* zoom wrapper */}
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
          {/* front */}
          <Image
            src={imagePath(product.image)}
            alt={product.name}
            fill
            className="
              object-cover
              transition-opacity duration-500 ease-in-out
              group-hover:opacity-0
            "
          />
          {/* back */}
          {product.imageback && (
            <Image
              src={imagePath(product.imageback)}
              alt={`${product.name} – back`}
              fill
              className="
                object-cover
                opacity-0
                transition-opacity duration-500 ease-in-out
                group-hover:opacity-100
              "
            />
          )}
        </div>

        {/* dark gradient overlay (click-through) */}
        <div className="
          absolute inset-0 bg-gradient-to-b from-transparent to-black
          opacity-50 group-hover:opacity-75 transition-opacity duration-500
          pointer-events-none
        " />
      </Link>

      {/* -------- Caption & button -------------------------------------- */}
      <div className="absolute bottom-0 left-0 p-4 space-y-2 z-10">
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
  );
}

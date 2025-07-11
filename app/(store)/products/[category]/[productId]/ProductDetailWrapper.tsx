// app/(store)/products/[category]/[productId]/ProductDetailWrapper.tsx
'use client';

import dynamic from 'next/dynamic';
import { Product } from '@/app/data/products';

const ProductDetailClient = dynamic(() => import('./ProductDetailClient'));

export default function ProductDetailWrapper({ product }: { product: Product }) {
  return <ProductDetailClient product={product} />;
}

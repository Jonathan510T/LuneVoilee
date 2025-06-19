// app/(store)/products/[category]/[productId]/page.tsx

import { productsList, type Product } from '@/app/data/products'
import { notFound }                     from 'next/navigation'
import ProductDetailClient              from './ProductDetailClient'

interface ProductPageProps {
  params: { category: string; productId: string }
}

export function generateStaticParams() {
  return productsList.map((p) => ({
    category:  p.category,
    productId: p.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  // await your params so you can safely destructure them
  const { productId } = await params

  const product = productsList.find((p) => p.id === productId)
  if (!product) notFound()

  return (
    <div className="bg-black text-white min-h-screen px-6 pt-32 pb-12 md:flex md:items-start md:space-x-12">
      <ProductDetailClient product={product} />
    </div>
  )
}

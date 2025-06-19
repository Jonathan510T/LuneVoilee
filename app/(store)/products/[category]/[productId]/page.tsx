// app/(store)/products/[category]/[productId]/page.tsx
import { productsList } from '@/app/data/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

type PageProps = {
  params: Promise<{ category: string; productId: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params;          // ✅ await the promise

  const product = productsList.find((p) => p.id === productId);
  if (!product) notFound();

  return (
    <div className="bg-black text-white min-h-screen px-6 pt-32 pb-12 md:flex md:items-start md:space-x-12">
      <ProductDetailClient product={product} />
    </div>
  );
}

export function generateStaticParams(): Array<{
  category: string;
  productId: string;
}> {
  return productsList.map((p) => ({
    category: p.category,
    productId: p.id,
  }));
}

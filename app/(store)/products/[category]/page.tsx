// app/(store)/products/[category]/page.tsx
import { categories, productsList } from '@/app/data/products';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ProductCard from '@/app/components/ProductCard';
import Link from 'next/link';

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;           // ✅ await the promise

  const slug   = category.toLowerCase();
  const info   = categories.find((c) => c.slug === slug);
  const name   = info?.name  ?? slug;
  const color  = info?.color ?? '#fff';

  const items  = productsList.filter((p) => p.category === slug);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />
      <main className="flex-grow w-full px-8 sm:px-30 pb-24">
        <h1 className="text-5xl font-bold pt-24 mb-8 text-center text-white uppercase">
          {name}
        </h1>

        <div className="grid grid-cols-2 gap-8 w-full">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} categoryColor={color} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/products" className="text-white underline">
            ← Back to All Products
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams(): Array<{ category: string }> {
  return categories.map((c) => ({ category: c.slug }));
}

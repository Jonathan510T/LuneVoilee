// app/(store)/products/[category]/page.tsx
import { categories, productsList } from '@/app/data/products';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ProductCard from '@/app/components/ProductCard';
import Link from 'next/link';

// ——————————————————————————————————————————
// Types
// ——————————————————————————————————————————

type PageProps = {
  params: Promise<{ category: string }>;
};

// ——————————————————————————————————————————
// Page Component
// ——————————————————————————————————————————

export default async function CategoryPage({ params }: PageProps) {
  /*
   * `params` comes in as a promise from the Next.js
   * router — we need to await it first.
   */
  const { category } = await params;

  const slug  = category.toLowerCase();
  const info  = categories.find((c) => c.slug === slug);
  const name  = info?.name  ?? slug;
  const color = info?.color ?? '#fff';

  // 👉 LIMIT the results to the first **three** products only
  const items = productsList
    .filter((p) => p.category === slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#2C2C2E]">
      <Navigation />

      <main className="flex-grow w-full px-6 sm:px-12 pb-24">
        <h1 className="text-4xl sm:text-5xl font-bold pt-24 mb-10 text-center text-[#F5F3EF] uppercase">
          {name}
        </h1>

        {/* Responsive grid – 1 column on phones, 2 on small screens, 3 on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} categoryColor={color} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="text-[#F5F3EF] underline">
            ← Back to All Products
          </Link>
        </div>
      </main>
    </div>
  );
}

// ——————————————————————————————————————————
// Static Params for SSG
// ——————————————————————————————————————————

export function generateStaticParams(): Array<{ category: string }> {
  return categories.map((c) => ({ category: c.slug }));
}

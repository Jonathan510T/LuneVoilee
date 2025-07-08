// app/(store)/products/page.tsx
'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ProductCard from '@/app/components/ProductCard';
import { productsList, type Product } from '@/app/data/products';

export default function ProductsPage() {
  // Keep the same spotlight logic for now; adjust the layout instead.
  const spotlight = productsList.slice(0, 6) as Product[];

  return (
    <div className="min-h-screen flex flex-col bg-[#2C2C2E]">
      <Navigation />

      <main className="flex-grow w-full px-6 sm:px-12 pb-24">
        <h1 className="text-4xl sm:text-5xl font-bold pt-24 mb-10 text-center text-[#F5F3EF] uppercase">
          All Products
        </h1>

        {/* Responsive: 1 column (phones), 2 (sm), 3 (md+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {spotlight.map((p) => (
            <ProductCard key={p.id} product={p} categoryColor="#fff" />
          ))}
        </div>
      </main>

    </div>
  );
}

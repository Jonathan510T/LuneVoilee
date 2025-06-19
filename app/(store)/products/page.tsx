'use client';

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ProductCard from '@/app/components/ProductCard';
import { productsList, type Product } from '@/app/data/products';

export default function ProductsPage() {
  const spotlight = productsList.slice(0, 6) as Product[];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />

      <main className="flex-grow w-full px-8 sm:px-30 pb-24">
        <h1 className="text-5xl font-bold pt-24 mb-8 text-center text-white">
          All Products
        </h1>

        {/* 2-column grid with bigger gap */}
        <div className="grid grid-cols-2 gap-8 w-full">
          {spotlight.map((p) => (
            <ProductCard key={p.id} product={p} categoryColor="#fff" />
          ))}
        </div>
      </main>

    </div>
  );
}

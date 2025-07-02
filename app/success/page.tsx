// app/success/page.tsx
'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2C2C2E] text-[#F5F3EF] px-6">
      {/* icon */}
      <CheckCircle size={72} className="text-green-400 mb-6" />

      {/* heading */}
      <h1 className="text-3xl font-semibold mb-2">Payment successful!</h1>

      {/* sub-text */}
      <p className="text-center max-w-md mb-8 opacity-80">
        Thank you for your purchase. Your order is being processed and we’ll
        email you a confirmation shortly.
      </p>

      {/* back-to-shop button */}
      <Link
        href="/products"               
        className="
          inline-block bg-[#F5F3EF] text-[#2C2C2E] px-6 py-3 rounded
          font-semibold uppercase tracking-wide transition
          hover:bg-[#D4AF37] hover:text-black
        "
      >
        Return to shopping
      </Link>
    </div>
  );
}

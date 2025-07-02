'use client';

import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

/* ------------------------------------------------------------------ */
/* INNER STRIPE FORM */
/* ------------------------------------------------------------------ */
function PaymentForm({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement)! },
    });

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      router.push('/success');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CardElement
        options={{ style: { base: { fontSize: '16px', color: '#F5F3EF' } } }}
        className="bg-transparent border px-4 py-3 rounded"
      />

      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-black text-[#F5F3EF] py-3 uppercase tracking-wide"
      >
        Pay now
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE COMPONENT */
/* ------------------------------------------------------------------ */
export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const subtotal = items.reduce((t, i) => t + i.price * i.quantity, 0);

  /* fetch PaymentIntent once cart is ready */
  useEffect(() => {
    if (!items.length) return; // avoid 0-amount intent
    (async () => {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart: items }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('PI route failed', res.status, text);
        return;
      }

      const { clientSecret } = await res.json();
      setClientSecret(clientSecret);
    })();
  }, [items]);

  /* wait for clientSecret before rendering payment section */
  const paymentSection = clientSecret && (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret, appearance: { theme: 'stripe' } }}
    >
      <PaymentForm clientSecret={clientSecret} />
    </Elements>
  );

  return (
    <div className="min-h-screen flex justify-center bg-[#2C2C2E] text-[#F5F3EF] pt-16">
      <div className="w-full max-w-5xl lg:flex">
        {/* ─────────────── MAIN COLUMN ─────────────── */}
        <div className="flex-1 p-8 space-y-12">
          {/* CONTACT & DELIVERY */}
          <section className="space-y-8">
            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border px-4 py-3 rounded"
                required
              />
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#F5F3EF]"
                />
                <span>
                  Sign up for emails to receive 15% off and be the first to hear
                  about new drops
                </span>
              </label>
            </div>

            {/* Delivery */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Delivery</h2>

              <select
                defaultValue="US"
                className="w-full bg-transparent border px-4 py-3 rounded"
              >
                <option value="US">United States</option>
              </select>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="First name"
                  required
                  className="bg-transparent border px-4 py-3 rounded"
                />
                <input
                  placeholder="Last name"
                  required
                  className="bg-transparent border px-4 py-3 rounded"
                />
              </div>

              <input
                placeholder="Company (optional)"
                className="w-full bg-transparent border px-4 py-3 rounded"
              />
              <input
                placeholder="Address"
                required
                className="w-full bg-transparent border px-4 py-3 rounded"
              />
              <input
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full bg-transparent border px-4 py-3 rounded"
              />

              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  placeholder="City"
                  required
                  className="bg-transparent border px-4 py-3 rounded"
                />
                <input
                  placeholder="State"
                  required
                  className="bg-transparent border px-4 py-3 rounded"
                />
                <input
                  placeholder="ZIP code"
                  required
                  className="bg-transparent border px-4 py-3 rounded"
                />
              </div>
            </div>
          </section>

          {/* PAYMENT */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Payment</h2>
            <p className="text-sm opacity-80">
              All transactions are secure and encrypted.
            </p>
            {paymentSection || (
              <p className="text-sm opacity-60">Loading payment form…</p>
            )}
          </section>
        </div>

        {/* ─────────────── SIDEBAR ─────────────── */}
        <aside className="lg:w-[380px] bg-gray-50/10 p-8 space-y-6">
          <h2 className="text-lg font-medium">Order summary</h2>

          <ul className="space-y-4 max-h-60 overflow-y-auto pr-2">
            {items.map((item) => (
              <li key={item.id} className="flex items-start">
                <div className="relative w-16 h-16 mr-4 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{item.name}</p>
                  <p className="text-xs opacity-80">Qty {item.quantity}</p>
                </div>
                <p className="text-sm">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

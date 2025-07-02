'use client';
import { useEffect } from 'react';

export default function PayPalLoader() {
  useEffect(() => {
    // 1️⃣ If the SDK is already present (hot-reload, nav, etc.) stop.
    if (window.paypal) return;

    // 2️⃣ Otherwise inject the <script>.
    const script = document.createElement('script');
    script.src =
      `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}` +
      '&currency=USD' +                    // charge in USD
      '&enable-funding=venmo,card' +       // turn on Venmo
      '&components=buttons,funding-eligibility';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null; // No UI—just side-effect.
}

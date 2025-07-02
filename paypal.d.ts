import type { PayPalNamespace } from '@paypal/paypal-js'; // <-- optional but nice for IntelliSense

declare global {
  interface Window {
    paypal?: PayPalNamespace;      // or `any` if you prefer not to import the type
  }
}

export {}; // makes this a module so the declaration is applied globally

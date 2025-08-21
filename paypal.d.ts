import type { PayPalNamespace } from '@paypal/paypal-js'; 

declare global {
  interface Window {
    paypal?: PayPalNamespace;      
  }
}

export {}; 

// app/layout.tsx
import './globals.css';

import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import PayPalLoader from './components/PayPalLoader';   // ← NEW

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#2C2C2E] text-white">
        {/* Provide cart state to the entire app */}
        <CartProvider>
          {/* Inject the PayPal / Venmo SDK once */}
          <PayPalLoader />                             {/* ← NEW */}

          <Navigation />

          {children}

          <Footer />                                   {/* ← moved inside provider */}

          {/* Cart drawer stays mounted so it can open from anywhere */}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}

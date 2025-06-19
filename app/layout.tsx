// app/layout.tsx
import './globals.css'
import { CartProvider } from './context/CartContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <CartProvider>
          <Navigation />
          {children}
          {/* make sure your CartSidebar is here too */}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
